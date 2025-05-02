import React, { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/api";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice = 0, clearCart } = useCart();
  const { user } = useUser();

  const [selectedPayment, setSelectedPayment] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [shippingOption, setShippingOption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const shippingOptions = [
    { id: "standard", label: "Standard (3-5 Tage)", cost: 5.9 },
    { id: "express", label: "Express (1-2 Tage)", cost: 9.9 },
  ];

  useEffect(() => {
    if (!user && !isSubmitting)
      navigate("/login", { state: { from: "/checkout" } });
    if (items.length === 0 && !isSubmitting) navigate("/cart");
  }, [user, items, navigate, isSubmitting]);

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

  const submitOrder = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError("");

      if (!selectedPayment) {
        setPaymentError("Bitte wählen Sie eine Zahlungsmethode aus");
        return;
      }
      if (!shippingOption) {
        setSubmitError("Bitte wählen Sie eine Versandoption aus");
        return;
      }

      const orderData = {
        user: user._id,
        items: items.map((item) => ({
          product: item._id,
          quantity: item.quantity,
          ...(item.size && { size: item.size }),
          ...(item.color && { color: item.color }),
        })),
        shippingAddress: {
          street: data.street.trim(),
          postalCode: data.postalCode.trim(),
          city: data.city.trim(),
          ...(data.phone && { phone: data.phone.trim() }),
          ...(data.fullName && { fullName: data.fullName.trim() }),
        },
        paymentMethod: selectedPayment,
        shippingOption: shippingOption,
        specialInstructions: orderNote.trim(),
      };
  
      const response = await createOrder(orderData);

      navigate("/order-confirmation", {
        state: {
          orderId: response._id,
          ...(response.estimatedDelivery && {
            estimatedDelivery: response.estimatedDelivery,
          }),
          total: response.total,
        },
      });
      clearCart();
    } catch (error) {
      setSubmitError(
        error.message ||
          "Bestellung konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
    postalCode: {
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

  const selectedShipping = shippingOptions.find((o) => o.id === shippingOption);
  const shippingCost = selectedShipping ? selectedShipping.cost : 0;
  const grandTotal = (Number(totalPrice) || 0) + shippingCost;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
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

      <form onSubmit={handleSubmit(submitOrder)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Lieferadresse</h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Vollständiger Name
              </label>
              <input
                {...register("fullName", validationRules.fullName)}
                defaultValue={`${user?.firstName} ${user?.lastName}`}
                className="w-full p-3 border rounded-lg"
                placeholder="Max Mustermann"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </div>

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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">PLZ</label>
                <input
                  {...register("postalCode", validationRules.postalCode)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="12345"
                />
                {errors.postalCode && (
                  <span className="text-red-500 text-sm">
                    {errors.postalCode.message}
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

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Versandart</h2>
              {shippingOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setShippingOption(option.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors
                    ${
                      shippingOption === option.id
                        ? "border-red-600 bg-red-50"
                        : "hover:border-gray-400"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 border rounded-full flex items-center justify-center
                        ${
                          shippingOption === option.id
                            ? "border-red-600 bg-red-600"
                            : "border-gray-400"
                        }`}
                      >
                        {shippingOption === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{option.label}</span>
                    </div>
                    <span>€{option.cost.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Zahlungsmethode</h2>
              {paymentError && (
                <p className="text-red-500 text-sm">{paymentError}</p>
              )}
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
          </div>
        </div>

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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-bold transition-colors
            ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting
            ? "Verarbeitung..."
            : `Jetzt sicher bezahlen (€${grandTotal.toFixed(2)})`}
        </button>

        {submitError && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {submitError}
          </div>
        )}
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-6 justify-center text-sm">
        {/* Security Badges */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            SSL verschlüsselte Verbindung
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            30 Tage Rückgaberecht
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
