import HaveQuestion from "@/components/ReusableSection/HaveQuestion";
import React from "react";

const HaveAQuestion = () => {
  return (
    <section className="my-10 md:my-16" id="contact">
      <div className="container mx-auto">
        <HaveQuestion
          title="Have a"
          span="Question?"
          description="Our team is here to help you with any inquiries you may have. Feel free to reach out anytime."
          buttonText="Contact Us"
        />
      </div>
    </section>
  );
};

export default HaveAQuestion;
