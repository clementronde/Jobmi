"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Profil() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
  });
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/user')
      .then(r => r.json())
      .then(data => setFormData(data))
      .catch(() => {});
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSaved(true);
      setEditing(false);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError('Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading') {
    return <div className="mt-[90px] flex justify-center py-20">Chargement...</div>;
  }

  if (status === 'unauthenticated') {
    return (
      <div className="mt-[90px] flex flex-col items-center py-20 gap-4">
        <p>Tu dois être connecté pour accéder à ton profil.</p>
        <Link href="/me-connecter" className="rounded-xl px-4 py-2 bg-black text-white font-semibold">
          Se connecter
        </Link>
      </div>
    );
  }

  const fields = [
    { label: 'Prénom', name: 'firstName' },
    { label: 'Nom', name: 'lastName' },
    { label: 'Email', name: 'email' },
    { label: 'Ville', name: 'city' },
    { label: 'Téléphone', name: 'phone' },
  ] as const;

  return (
    <div className="mt-[90px] max-w-screen-md mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Mon profil</h1>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="rounded-xl px-4 py-2 border border-black font-semibold text-sm cursor-pointer"
          >
            Modifier
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setEditing(false)}
              className="rounded-xl px-4 py-2 border border-gray-300 font-semibold text-sm cursor-pointer"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-xl px-4 py-2 bg-black text-white font-semibold text-sm cursor-pointer disabled:opacity-50"
            >
              {saving ? 'Sauvegarde...' : 'Enregistrer'}
            </button>
          </div>
        )}
      </div>

      {saved && (
        <p className="text-green-600 text-sm mb-4">Profil mis à jour.</p>
      )}
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <div className="flex flex-col gap-4 bg-white rounded-xl border border-gray-200 p-6 mb-6">
        {fields.map(({ label, name }) => (
          <div key={name} className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-500">{label}</label>
            {editing && name !== 'email' ? (
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg text-sm"
              />
            ) : (
              <p className="p-2 text-sm text-gray-800">
                {formData[name] || <span className="text-gray-400 italic">Non renseigné</span>}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#F3F3F3] rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">Test d'orientation RIASEC</h2>
        <p className="text-sm text-gray-600 mb-4">
          Découvre les métiers qui correspondent à ta personnalité.
        </p>
        <Link
          href="/orientation/test-orientation-jeunes"
          className="rounded-xl px-4 py-2 bg-black text-white font-semibold text-sm inline-flex items-center gap-2"
        >
          Refaire le test
          <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
        </Link>
      </div>
    </div>
  );
}
