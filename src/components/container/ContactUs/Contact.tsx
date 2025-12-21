import { useState } from "react";
import { ContactUs } from "../../constant/AllData";
import ButtonPrimary from "../../ui/Button/Button";
import CheckList from "../../ui/Input/CheckList";
import TextArea from "../../ui/Input/TextArea";
import TextInBox from "../../ui/Input/TextInBox";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  services: string[];
};

export default function ContactUsSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    services: [],
  });
  type FormErrors = Partial<Record<keyof ContactFormData, string>>;
  const [errors, setErrors] = useState<FormErrors>({});
  const errorClass =
    "border-red-500 hover:border-red-500 focus:border-red-500 focus:border-[3px]";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((item) => item !== value),
    }));

    
    if (errors.services) {
      setErrors((prev) => ({
        ...prev,
        services: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return; // stop submit
    }

    console.log("FORM DATA:", formData);
  };

  const validate = (data: ContactFormData): FormErrors => {
    const next: FormErrors = {};

    if (!data.name.trim()) next.name = "Name is required";
    if (!data.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      next.email = "Email is invalid";

    if (!data.message.trim()) next.message = "Message is required";

    
    if (data.services.length === 0)
      next.services = "Select at least one service";

    return next;
  };

  return (
    <article
      id="contactus"
      className="flex flex-col px-4 pt-10 pb-0 md:px-35 md:py-20 justify-center items-center"
    >
      <div className="flex flex-col gap-6 md:gap-12 md:w-180">
        <header className="flex flex-col gap-4">
          <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14 text-neutral-25 text-center">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="font-medium text-sm leading-7 text-neutral-400 text-center md:text-lg md:leading-8">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <TextInBox
                id="name"
                name="name"
                type="text"
                label="Name"
                placeholder="Enter your name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? errorClass : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm leading-7">{errors.name}</p>
              )}

              <TextInBox
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.name ? errorClass : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm leading-7">{errors.email}</p>
              )}

              <TextArea
                id="message"
                name="message"
                label="Message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className={errors.name ? errorClass : ""}
              />
              {errors.message && (
                <p className="text-red-500 text-sm leading-7">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3.5">

              <label
                className={`font-bold text-sm leading-7 ${
                  errors.services ? "text-red-500" : "text-neutral-25"
                }`}
              >
                Services
              </label>

              <div className="flex flex-col md:flex-row md:gap-9.25 gap-4">
                <div className="flex flex-col md:flex-row md:gap-9.25 gap-4">
                  {/* Column kiri */}
                  <div className="flex flex-col gap-3.5 md:gap-4">
                    {ContactUs.slice(0, 3).map((service) => (
                      <CheckList
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        value={service.value}
                        label={service.label}
                        onChange={(e: { target: { checked: boolean; }; }) =>
                          handleCheckboxChange(service.value, e.target.checked)
                        }
                      />
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-3.5 md:gap-4">
                    {ContactUs.slice(3).map((service) => (
                      <CheckList
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        value={service.value}
                        label={service.label}
                        onChange={(e: { target: { checked: boolean; }; }) =>
                          handleCheckboxChange(service.value, e.target.checked)
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              {errors.services && (
                <p className="text-red-500 text-sm leading-7">
                  {errors.services}
                </p>
              )}
            </div>
          </div>

          <ButtonPrimary
            id="button-send"
            type="submit"
            className="md:flex w-full md:h-12 font-bold text-sm md:text-base md:leading-7.5 tracking-[-0.02em] leading-7"
          >
            Send
          </ButtonPrimary>
          <div
            id="live"
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </form>
      </div>
    </article>
  );
}