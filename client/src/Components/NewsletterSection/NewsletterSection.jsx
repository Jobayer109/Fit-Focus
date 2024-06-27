import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosSecure } from "../../Hook/useAxiosSecure";

const NewsletterSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosSecure
      .post(
        "/newsLatter",
        {
          ...data,
          date: new Date().toISOString().split("T")[0],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.message === 0) {
          toast("User already exists");
        } else {
          toast("Newsletter Subscription successful");
        }
      });
  };

  return (
    <div className="my-36 container mx-auto rounded-xl bg-gradient-to-t from-black to-slate-800 p-10 shadow-lg">
      <div className="lg:grid grid-cols-2 gap-8">
        <div className="text-center p-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white shadow-md pb-1">
            Subscribe to Our Newsletter
          </p>
          <p className="text-gray-300 mt-4 text-sm md:text-base lg:text-lg">
            Don't Miss Out! Subscribe to Our Newsletter for the Latest Updates,
            Exclusive Offers, and Insider Tips. Join Our Community Today and
            Stay Informed!
          </p>
        </div>
        <div className="text-center p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered font-bold w-full text-gray-400"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 ml-1">Name is required.</p>
              )}
            </div>

            <div className="form-control w-full mb-5">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered font-bold w-full text-gray-400"
                {...register("user_email", { required: true })}
              />
              {errors.user_email && (
                <p className="text-red-500 ml-1">Email is required.</p>
              )}
            </div>
            <button
              className="btn text-white hover:text-orange-500 bg-black hover:bg-slate-900 border-2 hover:border-orange-600 mt-5 w-full md:w-auto tracking-wider"
              type="submit"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsletterSection;
