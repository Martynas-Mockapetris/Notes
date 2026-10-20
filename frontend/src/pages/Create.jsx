import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { ArrowLeftIcon } from 'lucide-react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error('All fields must be filled!');
      return;
    }

    setLoading(true);
    try {
      await api.post('/notes', {
        title,
        content
      });

      toast.success('Memory created!');
      navigate('/');
    } catch (error) {
      console.log('Error creating note', error);

      if (error.response.status === 429) {
        toast.error('Slow down!', { duration: 4000 });
      } else {
        toast.error('Failed to create');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={'/'} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4 flex flex-col">
                  <label className="label mb-4">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" placeholder="Note Title" className="input rounded-2xl w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control mb-4 flex flex-col">
                  <label className="label mb-4">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea placeholder="Write your memory here..." className="textarea rounded-2xl h-32 w-full" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
