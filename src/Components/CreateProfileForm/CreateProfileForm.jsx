import { usePortfolioStore } from "../store/usePortfolioStore";

const CreateProfileForm = () => {
  const data = usePortfolioStore((s) => s.data);
  const updateField = usePortfolioStore((s) => s.updateField);
  const reset = usePortfolioStore((s) => s.reset);

  return (
    <div>
      <input
        value={data.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <input
        value={data.accenture.subtitle}
        onChange={(e) => updateField("accenture.subtitle", e.target.value)}
      />

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CreateProfileForm;
