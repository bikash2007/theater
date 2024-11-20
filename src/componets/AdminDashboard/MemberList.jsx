import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../../contex";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const baseUrl = useContext(ApiContext);
  const apiUrl = `${baseUrl}api/users/`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: { Authorization: `token ${token}` },
      });
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleAcceptMember = async (memberId) => {
    const formData = new FormData();
    formData.append("user_id", memberId);
    try {
      await axios.post(
        `${baseUrl}api/membership/accept/`,
        formData,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      // Update local member state to reflect the new status
      setMembers((prevMembers) =>
        prevMembers.map((member) =>
          member.id === memberId
            ? { ...member, membership_detail: { ...member.membership_detail, membership_status: "accepted" } }
            : member
        )
      );
    } catch (error) {
      console.error("Error updating member status:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Member List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Username</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Membership ID</th>
              <th className="py-2 px-4">Membership Type</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              const { membership_detail } = member;
              return (
                <tr key={member.id} className="border-t border-gray-700">
                  <td className="py-2 px-4">{member.id}</td>
                  <td className="py-2 px-4">{member.username || "N/A"}</td>
                  <td className="py-2 px-4">{member.email || "N/A"}</td>
                  <td className="py-2 px-4">
                    {membership_detail?.membership_id || "N/A"}
                  </td>
                  <td className="py-2 px-4">
                    {membership_detail?.membership_type || "N/A"}
                  </td>
                  <td className="py-2 px-4">
                    {membership_detail?.membership_status === "accepted" ? (
                      <span className="text-green-500 font-bold">
                        ✓ Active Member
                      </span>
                    ) : membership_detail?.membership_status === "pending" ? (
                      <span className="text-yellow-500 font-bold">Pending</span>
                    ) : (
                      <span className="text-gray-500 font-bold">No Membership</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {membership_detail?.membership_status !== "accepted" && (
                      <button
                        onClick={() => handleAcceptMember(member.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      >
                        Accept
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
