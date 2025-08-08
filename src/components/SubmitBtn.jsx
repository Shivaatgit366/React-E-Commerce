import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();

  let isSubmitting = false;
  console.log("hi", isSubmitting);
  console.log("navigation", navigation);

  // Check if the form is currently submitting
  if (navigation && navigation.state === "submitting") {
    isSubmitting = true;
  }

  // Also we should change the content of the button; handle button content
  let buttonContent;

  if (isSubmitting) {
    console.log("Submitting...");
    buttonContent = <span className="loading loading-spinner">sending...</span>;
  } else {
    if (text) {
      buttonContent = text;
    } else {
      buttonContent = "Submit";
    }
  }

  return (
    <button
      className="btn btn-primary btn-block"
      type="submit"
      disabled={isSubmitting}
    >
      {buttonContent}
    </button>
  );
};

export default SubmitBtn;
