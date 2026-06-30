import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./SiteSettings.css";

function SiteSettings() {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);
  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);

  const [settings, setSettings] = useState({
    companyName: "",
    tagline: "",
    about: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    officeHours: "",
    googleMap: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
    footerDescription: "",
    copyright: "",
    logo: "",
    favicon: ""
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/settings`
      );

      const data = await response.json();

      setSettings(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file) => {
    if (!file) return "";

    const formData = new FormData();

    formData.append("image", file);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      }
    );

    const data = await response.json();

    return data.imageUrl;
  };

  const saveSettings = async (e) => {
    e.preventDefault();

    try {
      let logo = settings.logo;
      let favicon = settings.favicon;

      if (logoFile)
        logo = await uploadImage(logoFile);

      if (faviconFile)
        favicon = await uploadImage(faviconFile);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/settings`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            ...settings,
            logo,
            favicon
          })
        }
      );

      const data = await response.json();

      setSettings(data);

      alert("Settings updated successfully.");

    } catch (error) {

      console.log(error);

      alert("Failed to update settings.");

    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading Settings...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="settings-header">
        <h1>Website Settings</h1>
      </div>

      <form
        className="settings-form"
        onSubmit={saveSettings}
      >

        <div className="settings-grid">

          <input
            type="text"
            placeholder="Company Name"
            value={settings.companyName}
            onChange={(e)=>
              setSettings({
                ...settings,
                companyName:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Tagline"
            value={settings.tagline}
            onChange={(e)=>
              setSettings({
                ...settings,
                tagline:e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={settings.email}
            onChange={(e)=>
              setSettings({
                ...settings,
                email:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            value={settings.phone}
            onChange={(e)=>
              setSettings({
                ...settings,
                phone:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="WhatsApp"
            value={settings.whatsapp}
            onChange={(e)=>
              setSettings({
                ...settings,
                whatsapp:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Office Hours"
            value={settings.officeHours}
            onChange={(e)=>
              setSettings({
                ...settings,
                officeHours:e.target.value
              })
            }
          />

        </div>

        <textarea
          rows="5"
          placeholder="About Company"
          value={settings.about}
          onChange={(e)=>
            setSettings({
              ...settings,
              about:e.target.value
            })
          }
        />

        <textarea
          rows="3"
          placeholder="Address"
          value={settings.address}
          onChange={(e)=>
            setSettings({
              ...settings,
              address:e.target.value
            })
          }
        />

        <textarea
          rows="3"
          placeholder="Footer Description"
          value={settings.footerDescription}
          onChange={(e)=>
            setSettings({
              ...settings,
              footerDescription:e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Google Map URL"
          value={settings.googleMap}
          onChange={(e)=>
            setSettings({
              ...settings,
              googleMap:e.target.value
            })
          }
        />

        <div className="settings-grid">

          <input
            type="text"
            placeholder="Facebook"
            value={settings.facebook}
            onChange={(e)=>
              setSettings({
                ...settings,
                facebook:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Instagram"
            value={settings.instagram}
            onChange={(e)=>
              setSettings({
                ...settings,
                instagram:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="LinkedIn"
            value={settings.linkedin}
            onChange={(e)=>
              setSettings({
                ...settings,
                linkedin:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Twitter"
            value={settings.twitter}
            onChange={(e)=>
              setSettings({
                ...settings,
                twitter:e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="YouTube"
            value={settings.youtube}
            onChange={(e)=>
              setSettings({
                ...settings,
                youtube:e.target.value
              })
            }
          />

        </div>

        <div className="upload-section">

          <div>

            <label>Logo</label>

            {settings.logo && (
              <img
                src={`${import.meta.env.VITE_API_URL}${settings.logo}`}
                className="logo-preview"
                alt="logo"
              />
            )}

            <input
              type="file"
              onChange={(e)=>
                setLogoFile(e.target.files[0])
              }
            />

          </div>

          <div>

            <label>Favicon</label>

            {settings.favicon && (
              <img
                src={`${import.meta.env.VITE_API_URL}${settings.favicon}`}
                className="favicon-preview"
                alt="favicon"
              />
            )}

            <input
              type="file"
              onChange={(e)=>
                setFaviconFile(e.target.files[0])
              }
            />

          </div>

        </div>

        <button
          className="save-btn"
          type="submit"
        >
          Save Settings
        </button>

      </form>

    </AdminLayout>
  );
}

export default SiteSettings;