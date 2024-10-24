import AuthForm from "@/app/components/shared/AuthForm";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthForm type={"sign-in"} />
    </div>
  );
};

export default SignIn;
