import { useAppStore } from "../../store";

const CreateProfileForm = () => {
  const { user, updateField, reset } = useAppStore();

  return (
    <div>
      <input
        value={user?.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <input
        value={user?.accenture?.subtitle}
        onChange={(e) => updateField("accenture.subtitle", e.target.value)}
      />

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CreateProfileForm;
