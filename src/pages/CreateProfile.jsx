import CreateProfileForm from "../components/CreateProfile/CreateProfileForm";
import styles from "../components/CreateProfile/CreateProfileForm.module.css";

const CreateProfile = () => {
  return (
    <div style={{ padding: 32 }}>
      <h1 className={styles.title}>Create Your Profile</h1>
      <CreateProfileForm />
    </div>
  );
};

export default CreateProfile;
