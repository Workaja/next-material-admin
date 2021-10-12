import React from 'react'
import Head from 'next/head'
import { Grid, Breadcrumbs, Link, Typography } from '@mui/material'
import { useSnackbar } from 'notistack';
import NavBarComponents from '../components/NavBarComponents'
import DrawerComponents from '../components/DrawerComponents';

export default function AdminLayout(props) {
  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open)
    console.log(open)
  }

  const handleSnack = () => {
    enqueueSnackbar('Where is my snacks!')
  }

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Worked by Rixki" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <NavBarComponents handleDrawer={handleDrawer} title="Workaja" />
      <DrawerComponents state={{ o: open, d: setOpen }} handleDrawer={handleDrawer} handleLogout={handleSnack}/>

      <Grid container sx={{ p: 1 }}>
        <Grid item xs={12}>
          <h2 style={{ marginBottom: 1 }}>Title</h2>
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
            <Link underline="hover" color="inherit" href="/">
              Workaja
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid>
          {props.children}
        </Grid>
      </Grid>
    </>
  )
}
