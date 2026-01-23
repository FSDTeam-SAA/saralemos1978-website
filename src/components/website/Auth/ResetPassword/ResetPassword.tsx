"use client";

import { useState } from "react";
import { Eye, EyeOff, LoaderCircle, Lock } from "lucide-react";
// import useAuth from "@/lib/hooks/useAuth";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useResetPassword } from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPassword() {
   const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate, isPending } = useResetPassword();
  const router = useRouter();

  const handleSave = () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // if (newPassword.length < 8) {
    //   toast.error("Password must be at least 8 characters long");
    //   return;
    // }

    const email = localStorage.getItem("resetEmail");
    if (!email) {
      toast.error("Session expired. Please start the reset process again.");
      router.push("/forget-password");
      return;
    }

    mutate(
      { newPassword, email },
      {
        onSuccess: (data) => {
          toast.success(data.message || "Password reset successful! Please login.");
          localStorage.removeItem("resetEmail");
          router.push("/login");
        },
        onError: (error) => {
          toast.error(error.message || "Something went wrong. Please try again.");
        },
      }
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 w-[500px]">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-[550px] bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-8 sm:py-10"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-semibold text-[#65A30D] mb-2 text-center"
        >
          Create a New Password
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-[#6C757D] mb-6 text-center text-sm sm:text-base"
        >
          Set a strong password to secure your account.
        </motion.p>

        {/* Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {/* New Password */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-5"
          >
            <label className="block text-[#65A30D] font-medium mb-1">
              New Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword1 ? "text" : "password"}
                className="w-full border border-[#E5E7EB] rounded-lg pl-10 pr-10 py-3 outline-none focus:border-[#65A30D]"
                placeholder="********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C757D]"
              >
                {showPassword1 ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </motion.div>

          {/* Confirm Password */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-8"
          >
            <label className="block text-[#65A30D] font-medium mb-1">
              Confirm New Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword2 ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-3 outline-none focus:border-[#65A30D]"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C757D] cursor-pointer"
              >
                {showPassword2 ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </motion.div>

          {/* Button */}
          {/* <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full bg-gradient-to-r from-[#005DAA] to-[#00C8B3] text-white p-3 rounded-md text-base sm:text-lg font-medium transition flex justify-center items-center gap-2 cursor-pointer ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
            onClick={handleSave}
            disabled={loading}
          >
            {loading && <LoaderCircle className="animate-spin" />}
            {loading ? "Saving..." : "Confirm"}
          </motion.button> */}

          <button className="w-full bg-[#65A30D] text-white p-2 rounded-md text-base sm:text-lg font-medium transition flex justify-center items-center gap-2 cursor-pointer">Confirm</button>
        </motion.div>
      </motion.div>
    </div>
  );
}
