"use client";
import { RegistrationFormContainer } from "@/components/website/Auth/Registration/RegistrationFormContainer";
import { useRegister } from "@/lib/hooks/useRegister";
import { useRegisterFormStore } from "@/store/useRegisterFormStore";
import { buildFormData } from "@/utils/buildFormData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const RegistrationPage = () => {
  const { form } = useRegisterFormStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const { mutate, isPending, isSuccess, isError } = useRegister();

  const handleFormComplete = () => {
    const formData = buildFormData(form);

    mutate(formData, {
      onSuccess: (data) => {
        setIsSubmitted(true);

        toast.success( data.message||"Registration successful!");
      },
      onError: (error) => {

        toast.error(error.message || "Registration failed. Please try again.");
      },
    });
  };

  const handleClose = () => {
    router.push("/");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-emerald-600 mb-2">
              Success!
            </h1>
            <p className="text-gray-600 mb-6">
              Your profile has been successfully created.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6 text-left text-sm">
              <p className="text-emerald-900">
                <strong>Name:</strong> {form.firstName} {form.lastName}
              </p>
              <p className="text-emerald-900 mt-1">
                <strong>Email:</strong> {form.email}
              </p>
              <p className="text-emerald-900 mt-1">
                <strong>Company:</strong> {form.companyName}
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                window.location.href = "/";
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg w-full transition"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex items-center justify-center max-h-screen overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/yacht.jpeg')",
        }}
      />
      <div className=" z-50 overflow-y-scroll max-h-screen ">
        <RegistrationFormContainer onComplete={handleFormComplete} onClose={handleClose} isLoading={isPending} />
      </div>
    </div>
  );
};

export default RegistrationPage;
