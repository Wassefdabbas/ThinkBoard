import { NotebookPenIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center
     bg-base-200/50 p-8 rounded-lg border-2 border-dashed border-primary/30">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookPenIcon className="size-12 text-primary" />
      </div>
      <h3 className="text-3xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started.
      </p>
      <Link to="/create" className="btn btn-primary btn-wide">
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;