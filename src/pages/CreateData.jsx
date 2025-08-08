import { FormInput, SubmitBtn } from "../components";
import { useCreateDummyMutation } from "../utils/useVariationsQuery";

const CreateData = () => {
  const mutation = useCreateDummyMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");

    mutation.mutate(
      { name },
      {
        onSuccess: () => {
          alert("Thank you! Data created successfully 🎉");
          e.target.reset(); // optional: clear form
        },
        onError: (err) => {
          alert(`Error: ${err.message}`);
        },
      },
    );
  };

  return (
    <section className="grid h-screen place-items-center px-6 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="w-65 card flex flex-col gap-y-4 bg-base-100 p-8 shadow-lg md:w-96"
      >
        <h4 className="text-center text-3xl font-bold">Create Dummy</h4>
        <FormInput type="text" label="Name" name="name" />
        <div className="mt-4">
          <SubmitBtn text="Create" />
        </div>
      </form>
    </section>
  );
};

export default CreateData;
