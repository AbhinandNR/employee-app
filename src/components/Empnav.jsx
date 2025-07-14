import React from 'react'
import { Link } from 'react-router-dom'

const Empnav = () => {
  return (
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Employee</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Add">Add Employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Empnav