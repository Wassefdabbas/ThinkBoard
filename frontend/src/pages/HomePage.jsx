import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import Spinner from "../components/Spinner";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimit, setIsRateLimit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get(`/notes`);
        setNotes(res.data.notes);
        setIsRateLimit(false);
      } catch (error) {
        console.log("Error fetching notes : ", error);
        if (error.response?.status === 429) {
          setIsRateLimit(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <Navbar />

      {isRateLimit && <RateLimit />}

      <div className="p-4 sm:p-6 md:p-8">
        {loading && (
          <div className="flex justify-center items-center py-10">
            <Spinner />
          </div>
        )}

        {!loading && notes.length === 0 && !isRateLimit && <NotesNotFound />}

        {!loading && notes.length > 0 && !isRateLimit && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;