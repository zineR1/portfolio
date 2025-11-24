import { useState } from "react";
import styles from "./CreateProfileForm.module.css";
import { emptyUser } from "../../constants";
import { User } from "../../types";

const CreateProfileForm = () => {
  const [newUser, setNewUser] = useState<User>(emptyUser);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Helper for array fields
  const handleArrayChange = (field: string, index: number, value: string) => {
    const arr = [...(newUser.consoleData[field] || [])];
    arr[index] = value;
    setNewUser({
      ...newUser,
      consoleData: { ...newUser.consoleData, [field]: arr },
    });
  };

  // Helper for nested fields
  const handleNestedChange = (parent: string, key: string, value: string) => {
    if (parent === "job" || parent === "sideProject") {
      setNewUser({
        ...newUser,
        [parent]: { ...newUser[parent], [key]: value },
      });
    } else if (parent === "consoleData") {
      setNewUser({
        ...newUser,
        consoleData: { ...newUser.consoleData, [key]: value },
      });
    }
  };

  // Helper for projects array
  const handleProjectChange = (idx: number, key: string, value: string) => {
    const arr = [...newUser.projects];
    arr[idx] = { ...arr[idx], [key]: value };
    setNewUser({ ...newUser, projects: arr });
  };

  // Helper for techStack inside projects
  const handleProjectTechChange = (
    pIdx: number,
    tIdx: number,
    value: string
  ) => {
    const arr = [...newUser.projects];
    const techArr = [...(arr[pIdx].techStack || [])];
    techArr[tIdx] = value;
    arr[pIdx] = { ...arr[pIdx], techStack: techArr };
    setNewUser({ ...newUser, projects: arr });
  };

  // Add project
  const addProject = () => {
    setNewUser({
      ...newUser,
      projects: [
        ...newUser.projects,
        {
          name: "",
          shortDescription: "",
          longDescription: "",
          projectTag: "",
          githubLink: "",
          liveLink: "",
          techStack: [""],
        },
      ],
    });
  };

  // Add array item for consoleData
  const addConsoleArrayItem = (field: string) => {
    setNewUser({
      ...newUser,
      consoleData: {
        ...newUser.consoleData,
        [field]: [...(newUser.consoleData[field] || []), ""],
      },
    });
  };

  // Add tech to project
  const addTechToProject = (pIdx: number) => {
    const arr = [...newUser.projects];
    arr[pIdx].techStack = [...(arr[pIdx].techStack || []), ""];
    setNewUser({ ...newUser, projects: arr });
  };

  // Reset form
    const resetForm = () => {
      setNewUser(emptyUser);
      setFirstName("");
      setLastName("");
    };

  // Configuración de campos principales
  const mainFields = [
    { key: "role", label: "Role", type: "input" },
    { key: "description", label: "Description", type: "input" },
    { key: "linkedinLink", label: "LinkedIn Link (optional)", type: "input" },
    { key: "githubLink", label: "GitHub Link (optional)", type: "input" },
    // experience handled separately
    // { key: "resume", label: "Resume Link", type: "input" },
    // { key: "emailContact", label: "Email Contact", type: "input" },
  ];

  // Configuración de campos anidados
  const nestedFields = [
    { parent: "job", key: "title", label: "Job Title", type: "input" },
    {
      parent: "sideProject",
      key: "title",
      label: "Side Project Title",
      type: "input",
    },
  ];

  // Configuración de campos de consoleData
  const consoleFields = [
    { key: "intro", label: "Console Intro", type: "textarea" },
    { key: "aboutMe", label: "Console About Me", type: "textarea" },
    { key: "techStack", label: "Console Tech Stack", type: "textarea" },
    { key: "hobbies", label: "Console Hobbies", type: "textarea" },
  ];

  return (
    <div className={styles.container}>
      <form className={styles.inputs}>
          {/* First/Last Name in a row (separate from Experience/Role) */}
          <div className={styles.row}>
            <div style={{ flex: 1 }}>
              <label className={styles.label}>First Name</label>
              <input
                className={`${styles.input} ${styles.halfInput}`}
                value={firstName}
                placeholder="First Name"
                onChange={e => {
                  setFirstName(e.target.value);
                  setNewUser({ ...newUser, name: `${e.target.value} ${lastName}`.trim() });
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className={styles.label}>Last Name</label>
              <input
                className={`${styles.input} ${styles.halfInput}`}
                value={lastName}
                placeholder="Last Name"
                onChange={e => {
                  setLastName(e.target.value);
                  setNewUser({ ...newUser, name: `${firstName} ${e.target.value}`.trim() });
                }}
              />
            </div>
          </div>
          {/* Experience and Role in a single row */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 24, marginBottom: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", minWidth: 180 }}>
              <label className={styles.label}>Experience (years)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  type="button"
                  style={{ height: 40, width: 36, fontSize: 18, borderRadius: 8, border: 'none', background: '#222', color: '#fff', cursor: 'pointer' }}
                  onClick={() => {
                    const current = parseInt(newUser.experience || '0', 10);
                    setNewUser({ ...newUser, experience: String(Math.max(0, current - 1)) });
                  }}
                >
                  -
                </button>
                <div style={{ display: 'flex', alignItems: 'center', background: 'transparent' }}>
                  <input
                    type="number"
                    className={styles.input}
                    style={{ width: 60, textAlign: 'center', marginBottom: 0, height: 45, lineHeight: '45px', marginRight: 6 }}
                    value={newUser.experience || '0'}
                    min={0}
                    onChange={e => {
                      const val = Math.max(0, Number(e.target.value));
                      setNewUser({ ...newUser, experience: String(val) });
                    }}
                  />
                  <span style={{ color: '#fff', fontSize: 16, pointerEvents: 'none', height: 45, display: 'flex', alignItems: 'center', marginLeft: 2 }}>years</span>
                </div>
                <button
                  type="button"
                  style={{ height: 40, width: 36, fontSize: 18, borderRadius: 8, border: 'none', background: '#222', color: '#fff', cursor: 'pointer' }}
                  onClick={() => {
                    const current = parseInt(newUser.experience || '0', 10);
                    setNewUser({ ...newUser, experience: String(current + 1) });
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label className={styles.label}>Role</label>
              <input
                className={styles.input}
                style={{ flex: 1, minWidth: 120, marginBottom: 0 }}
                value={newUser.role || ""}
                placeholder="Role"
                onChange={e => setNewUser({ ...newUser, role: e.target.value })}
              />
            </div>
          </div>
          {/* Other main fields (except role) */}
          {mainFields.filter(f => f.key !== "role" && f.key !== "emailContact").map((field) => (
            <div key={field.key} style={{ marginBottom: 12 }}>
              <label className={styles.label}>{field.label}</label>
              <input
                className={styles.input}
                value={
                  typeof newUser[field.key as keyof User] === "string"
                    ? (newUser[field.key as keyof User] as string)
                    : ""
                }
                placeholder={field.label}
                onChange={(e) =>
                  setNewUser({ ...newUser, [field.key]: e.target.value })
                }
              />
            </div>
          ))}
        {/* Campos anidados */}
        {nestedFields.map((field) => (
          <div key={field.parent + field.key} style={{ marginBottom: 12 }}>
            <label className={styles.label}>{field.label}</label>
            <input
              className={styles.input}
              value={
                newUser[field.parent as keyof User] &&
                typeof (newUser[field.parent as keyof User] as any)[field.key] ===
                  "string"
                  ? (newUser[field.parent as keyof User] as any)[field.key]
                  : ""
              }
              placeholder={field.label}
              onChange={(e) =>
                handleNestedChange(field.parent, field.key, e.target.value)
              }
            />
          </div>
        ))}
        {/* Console Intro y About Me como textarea, Tech Stack y Hobbies como array */}
        <div style={{ marginBottom: 12 }}>
          <label className={styles.label}>Console Intro</label>
          <textarea
            className={styles.textarea}
            value={typeof newUser.consoleData.intro === "string" ? newUser.consoleData.intro : ""}
            placeholder="Console Intro"
            onChange={e => handleNestedChange("consoleData", "intro", e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label className={styles.label}>Console About Me</label>
          <textarea
            className={styles.textarea}
            value={typeof newUser.consoleData.aboutMe === "string" ? newUser.consoleData.aboutMe : ""}
            placeholder="Console About Me"
            onChange={e => handleNestedChange("consoleData", "aboutMe", e.target.value)}
          />
        </div>
        {/* Console Tech Stack array */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <label className={styles.label}>Console Tech Stack:</label>
          <button type="button" className={styles.button} style={{ marginLeft: 8 }} onClick={() => addConsoleArrayItem("techStack")}>Add Tech</button>
        </div>
        {(Array.isArray(newUser.consoleData.techStack) ? newUser.consoleData.techStack : [""]).map((tech: string, idx: number) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <label className={styles.label} style={{ minWidth: 90 }}>{`Tech #${idx + 1}`}</label>
            <input
              className={styles.input}
              value={tech}
              placeholder={`Tech #${idx + 1}`}
              onChange={e => handleArrayChange("techStack", idx, e.target.value)}
            />
          </div>
        ))}
        {/* Console Hobbies array */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <label className={styles.label}>Console Hobbies:</label>
          <button type="button" className={styles.button} style={{ marginLeft: 8 }} onClick={() => addConsoleArrayItem("hobbies")}>Add Hobby</button>
        </div>
        {(Array.isArray(newUser.consoleData.hobbies) ? newUser.consoleData.hobbies : [""]).map((hobbie: string, idx: number) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <label className={styles.label} style={{ minWidth: 90 }}>{`Hobby #${idx + 1}`}</label>
            <input
              className={styles.input}
              value={hobbie}
              placeholder={`Hobby #${idx + 1}`}
              onChange={e => handleArrayChange("hobbies", idx, e.target.value)}
            />
          </div>
        ))}
        {/* Soft Skills Array */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <label className={styles.label}>Soft Skills:</label>
          <button type="button" className={styles.button} style={{ marginLeft: 8 }} onClick={() => addConsoleArrayItem("softSkills")}>Add Soft Skill</button>
        </div>
        {(Array.isArray(newUser.consoleData.softSkills) ? newUser.consoleData.softSkills : [""]).map((skill: string, idx: number) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <label className={styles.label} style={{ minWidth: 90 }}>{`Soft Skill #${idx + 1}`}</label>
            <input
              className={styles.input}
              value={skill}
              placeholder={`Soft Skill #${idx + 1}`}
              onChange={e => handleArrayChange("softSkills", idx, e.target.value)}
            />
          </div>
        ))}
        {/* Sección de proyectos eliminada, solo se pide data para la primera pantalla */}
        <button type="button" className={styles.button} onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
