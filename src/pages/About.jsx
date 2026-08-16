import { StyledGenreChip } from "../components/StyledComponents";

function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card bg-dark text-white border-warning border-opacity-30 shadow-lg rounded-4 overflow-hidden mb-4">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="display-4">🎬</span>
                <div>
                  <h1 className="h2 text-warning fw-bold mb-1">About Movie Reviewer Pro</h1>
                  <p className="text-secondary mb-0">
                    A Next-Generation React Single Page Application for Cinema Lovers
                  </p>
                </div>
              </div>

              <hr className="my-4 border-secondary border-opacity-25" />

              <h2 className="h4 text-white fw-bold mb-3">✨ Key Project Features</h2>
              <div className="row g-3 mb-4">
                <div className="col-12 col-md-6">
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-3 border border-secondary border-opacity-20 h-100">
                    <h3 className="h6 text-warning fw-bold">🍿 Movie Collection Management</h3>
                    <p className="small text-secondary mb-0">
                      Full CRUD capabilities to add, edit, track, review, and delete movies dynamically.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-3 border border-secondary border-opacity-20 h-100">
                    <h3 className="h6 text-warning fw-bold">🚀 React Router DOM Navigation</h3>
                    <p className="small text-secondary mb-0">
                      Seamless multi-page SPA routing between Home, About, Contact/Register, and 404 pages.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-3 border border-secondary border-opacity-20 h-100">
                    <h3 className="h6 text-warning fw-bold">📝 Advanced Form Handling</h3>
                    <p className="small text-secondary mb-0">
                      Controlled inputs, state-driven validation, real-time feedback, and success banners.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-3 border border-secondary border-opacity-20 h-100">
                    <h3 className="h6 text-warning fw-bold">🎨 4 React Styling Approaches</h3>
                    <p className="small text-secondary mb-0">
                      Demonstrates Inline Styling, CSS Stylesheets, CSS Modules, and Styled Components.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="h4 text-white fw-bold mb-3">🛠️ Technology Stack</h2>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <StyledGenreChip>React 19</StyledGenreChip>
                <StyledGenreChip>React Router DOM 7</StyledGenreChip>
                <StyledGenreChip>Vite</StyledGenreChip>
                <StyledGenreChip>Bootstrap 5</StyledGenreChip>
                <StyledGenreChip>Styled Components</StyledGenreChip>
                <StyledGenreChip>CSS Modules</StyledGenreChip>
                <StyledGenreChip>Local Storage API</StyledGenreChip>
              </div>

              <div className="p-4 bg-black bg-opacity-40 rounded-4 border border-warning border-opacity-20">
                <h3 className="h5 text-warning fw-bold mb-2">🎓 Assignment Compliance</h3>
                <p className="small text-secondary mb-0">
                  This project satisfies all requirements for <strong>ReactJS Assignment 1, 2, and 3</strong>,
                  including Reusable Components, Props, Ternary & && Operators, Custom Hooks, Bootstrap grid,
                  React Router DOM navigation, Form Validation, and 404 Not Found handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
