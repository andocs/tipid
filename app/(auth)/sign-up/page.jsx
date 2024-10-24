import AuthForm from "@/app/components/shared/AuthForm";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthForm type={"sign-up"} />
    </div>
  );
};

export default SignUp;
