export const registerUser = async (userData: {
  firstName: string
  lastName: string
  email: string
  city: string
  password: string
  phone: string
}) => {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Inscription échouée')
  return data
}

export const getUserData = async (_email: string) => {
  const res = await fetch('/api/user')
  if (!res.ok) throw new Error('Récupération du profil échouée')
  return res.json()
}

export const updateUserData = async (_email: string, userData: Record<string, string>) => {
  const res = await fetch('/api/user', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  if (!res.ok) throw new Error('Mise à jour du profil échouée')
  return res.json()
}

export const subscribeToNewsletter = async (email: string) => {
  await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
}
