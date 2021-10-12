import Head from 'next/head'
import Image from 'next/image'
import { SnackbarProvider } from 'notistack'

import AdminLayout from '../layouts/admin'

export default function Home() {
  return (
    <SnackbarProvider maxSnack={3}>
      <AdminLayout title="Welcome to Workaja Admin">
        ini index
      </AdminLayout>
    </SnackbarProvider>
  )
}
