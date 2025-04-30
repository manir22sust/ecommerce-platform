import React, { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice = 0, clearCart } = useCart();
  const { user } = useUser();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watch form values for real-time validation
  const formValues = watch();

  /// Modified useEffect
  useEffect(() => {
    if (!user && !isSubmitting) {
      navigate("/login", { state: { from: "/checkout" } });
    }
    if (items.length === 0 && !isSubmitting) {
      navigate("/cart");
    }
  }, [user, items, navigate, isSubmitting]);

  // Payment methods
  const paymentMethods = [
    {
      id: "invoice",
      label: "Rechnung",
      description: "Zahlung innerhalb von 14 Tagen",
    },
    {
      id: "credit",
      label: "Kreditkarte",
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "paypal",
      label: "PayPal",
      description: "Schnell und sicher bezahlen",
    },
  ];

  // Handle order submission
  const submitOrder = (data) => {
    setIsSubmitting(true);
    if (!selectedPayment) {
      setPaymentError("Bitte wählen Sie eine Zahlungsmethode aus");
      return;
    }

    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);

    const orderData = {
      orderId: Date.now().toString(),
      userId: user?._id ?? "guest",
      items:
        items?.map((item) => ({
          productId: item.id,
          name: item.name,
          price: Number(item.price),
          quantity: Number(item.quantity),
          image: item.image,
        })) ?? [],
      shippingAddress: {
        fullName: data.fullName?.trim(),
        street: data.street?.trim(),
        zipCode: data.zipCode?.trim(),
        city: data.city?.trim(),
        phone: data.phone?.trim(),
      },
      paymentMethod: selectedPayment,
      total: grandTotal,
      note: orderNote?.trim(),
      estimatedDelivery: estimatedDelivery.toLocaleDateString("de-DE"),
    };

    console.log("Order submitted:", orderData);

    navigate("/order-confirmation", { state: orderData });
    // Clear cart after successful navigation
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  // Shipping cost calculation
  const shippingCost = totalPrice > 50 ? 0 : 5.9;
  const grandTotal = (Number(totalPrice) || 0) + shippingCost;

  // Handle discount code submission
  const applyDiscount = (e) => {
    e.preventDefault();
    if (discountCode.trim()) {
      // Add discount logic here
    }
  };

  // Form validation rules
  const validationRules = {
    fullName: {
      required: "Name ist erforderlich",
      minLength: { value: 3, message: "Mindestens 3 Zeichen" },
    },
    street: {
      required: "Straße ist erforderlich",
      pattern: {
        value: /^[a-zA-ZäöüßÄÖÜ\s\d-]+ \d+[a-zA-Z]?$/,
        message: "Ungültiges Straßenformat",
      },
    },
    zipCode: {
      required: "PLZ ist erforderlich",
      pattern: { value: /^\d{5}$/, message: "5-stellige PLZ erforderlich" },
    },
    city: {
      required: "Stadt ist erforderlich",
      minLength: { value: 2, message: "Ungültige Stadt" },
    },
    phone: {
      required: "Telefon ist erforderlich",
      pattern: {
        value: /^\+?[0-9\s\-()]{6,20}$/,
        message: "Ungültige Telefonnummer",
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Checkout Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Kasse</h1>
          <Link
            to="/cart"
            className="text-red-600 hover:text-red-700 flex items-center"
          >
            <ArrowRightIcon className="w-4 h-4 rotate-180 mr-1" />
            Zurück zum Warenkorb
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {["Versand", "Zahlung", "Bestätigung"].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${
                    index < 1
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
              >
                {index + 1}
              </div>
              <span className={index < 1 ? "font-medium" : "text-gray-500"}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Form */}
      <form onSubmit={handleSubmit(submitOrder)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Address Fields */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Lieferadresse</h2>

            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Vollständiger Name
              </label>
              <input
                {...register("fullName", validationRules.fullName)}
                defaultValue={`${user?.name} ${user?.lastName}`}
                className="w-full p-3 border rounded-lg"
                placeholder="Max Mustermann"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Street Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Straße und Hausnummer
              </label>
              <input
                {...register("street", validationRules.street)}
                className="w-full p-3 border rounded-lg"
                placeholder="Musterstraße 123"
              />
              {errors.street && (
                <span className="text-red-500 text-sm">
                  {errors.street.message}
                </span>
              )}
            </div>

            {/* Zip Code & City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">PLZ</label>
                <input
                  {...register("zipCode", validationRules.zipCode)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="12345"
                />
                {errors.zipCode && (
                  <span className="text-red-500 text-sm">
                    {errors.zipCode.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Stadt</label>
                <input
                  {...register("city", validationRules.city)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Musterstadt"
                />
                {errors.city && (
                  <span className="text-red-500 text-sm">
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Telefonnummer
              </label>
              <input
                {...register("phone", validationRules.phone)}
                className="w-full p-3 border rounded-lg"
                placeholder="+49 123 456789"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Zahlungsmethode</h2>
            {paymentError && (
              <p className="text-red-500 text-sm">{paymentError}</p>
            )}

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => {
                    setSelectedPayment(method.id);
                    setPaymentError("");
                  }}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors
                    ${
                      selectedPayment === method.id
                        ? "border-red-600 bg-red-50"
                        : "hover:border-gray-400"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 border rounded-full flex items-center justify-center
                        ${
                          selectedPayment === method.id
                            ? "border-red-600 bg-red-600"
                            : "border-gray-400"
                        }`}
                    >
                      {selectedPayment === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{method.label}</h3>
                      <p className="text-sm text-gray-500">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Discount Code Section */}
            <div className="border-t pt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Gutscheincode"
                  className="flex-1 p-2 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={applyDiscount}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                  disabled={!discountCode.trim()}
                >
                  Einlösen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Bestellübersicht</h2>

          <div className="space-y-3">
            {items?.map((item) => (
              <div key={item.cartId} className="flex justify-between">
                <span>
                  {item.name} ({item.quantity}x)
                </span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Zwischensumme</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Versandkosten</span>
              <span>€{shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Gesamtsumme</span>
              <span>€{grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Order Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Bestellnotiz (optional)
          </label>
          <textarea
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows="3"
            placeholder="Sonderwünsche oder Hinweise zur Lieferung..."
            maxLength="500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-bold transition-colors"
        >
          Jetzt sicher bezahlen (€{grandTotal.toFixed(2)})
        </button>
      </form>

      {/* Security Badges */}
      <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-6 justify-center text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <img src="/ssl-secure.png" alt="SSL Secure" className="w-8 h-8" />
          SSL verschlüsselte Verbindung
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <img src="/money-back.png" alt="Money Back" className="w-8 h-8" />
          30 Tage Rückgaberecht
        </div>
      </div>
    </div>
  );
};

export default Checkout;
