'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createAgency(formData: FormData) {
  try {
    const rawFormData = {};

    formData.forEach((value, key) => {
      if (value !== '') {
        // @ts-ignore
        rawFormData[key] = value;
      }
    });

    const res = await fetch('http://localhost:8000/api/agencies/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
    });
    const data = await res.json();

    if (!res.ok) {
      console.log({ ...data });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  revalidatePath('/agencies');
  redirect('/agencies');
}

export async function updateAgency(id: number, formData: FormData) {
  try {
    const rawFormData = {};

    formData.forEach((value, key) => {
      if (value !== '') {
        // @ts-ignore
        rawFormData[key] = value;
      }
    });

    const res = await fetch(`http://localhost:8000/api/agencies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
    });
    const data = await res.json();

    if (!res.ok) {
      console.log({ ...data });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  revalidatePath(`/agencies/${id}`);
  redirect(`/agencies/${id}`);
}
