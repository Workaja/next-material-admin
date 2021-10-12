import AuthLayout from "../../layouts/auth"
import Link from 'next/link'
import {
  Avatar, Button, CssBaseline,
  TextField, FormControlLabel,
  Checkbox, Paper, Box,
  Grid, Typography, styles as MuiStyles
} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Workaja Admin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function LoginPage() {
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <>
      <AuthLayout title="Login to Workaja Admin">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Sign In With Credentials
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 1, mb: 3 }}
          >
            Sign In Google
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </AuthLayout>
    </>
  )
}
