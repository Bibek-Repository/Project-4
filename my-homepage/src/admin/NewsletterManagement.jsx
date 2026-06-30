import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./NewsletterManagement.css";

function NewsletterManagement() {

  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {

    const fetchSubscribers = async () => {

      try {

        const response = await fetch(
          "${import.meta.env.VITE_API_URL}/api/newsletter",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch subscribers.");
        }

        const data = await response.json();

        setSubscribers(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchSubscribers();

  }, [token]);

  const deleteSubscriber = async (id) => {

    if (!window.confirm("Delete this subscriber?")) return;

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to delete subscriber.");
      }

      setSubscribers((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }

  };

  if (loading) {

    return (
      <AdminLayout>

        <h2>Loading subscribers...</h2>

      </AdminLayout>
    );

  }

  return (

    <AdminLayout>

      <div className="newsletter-header">

        <div>

          <h1>Newsletter Subscribers</h1>

          <p>
            Manage everyone who subscribed for updates.
          </p>

        </div>

      </div>

      <div className="newsletter-table-container">

        <table className="newsletter-table">

          <thead>

            <tr>

              <th>Email Address</th>

              <th>Subscribed On</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {subscribers.length === 0 ? (

              <tr>

                <td colSpan="3">

                  No subscribers yet.

                </td>

              </tr>

            ) : (

              subscribers.map((subscriber) => (

                <tr key={subscriber._id}>

                  <td>{subscriber.email}</td>

                  <td>
                    {new Date(
                      subscriber.createdAt
                    ).toLocaleString()}
                  </td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteSubscriber(
                          subscriber._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );

}

export default NewsletterManagement;