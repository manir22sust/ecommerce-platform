import { UserCircleIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  return (
    <form className="space-y-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2 text-left"
        >
          Ihr Name
        </label>
        <div className="relative">
          <UserCircleIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Max Mustermann"
            required
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2 text-left"
        >
          Ihre E-Mail
        </label>
        <div className="relative">
          <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            id="email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="beispiel@email.de"
            required
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2 text-left"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Wie können wir Ihnen helfen?"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-red-600 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Nachricht senden
      </button>
    </form>
  );
};

export default ContactForm;
