import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/*
  Home — Prerna Collective
  - Pure frontend shell using theme tokens
  - Monochrome neutrals with blue interactions
  - No data wiring yet (we'll hydrate from /public/data later)
*/

export default function HomePage() {
    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Hero className="card brandish">
                    <div className="hero__eyebrow">Prerna Collective</div>
                    <h1 className="hero__title">
                        Stories, capital, and programs for ideas that move people.
                    </h1>
                    <p className="hero__dek">
                        A frontend-only site—no backend. Content will load from simple JSON
                        files. Clean routes, strong typography, and a blue-forward UI on
                        pure black/white themes.
                    </p>

                    <Styled.CTAs>
                        <NavLink to="/our-work" className="btn-primary">Explore Our Work</NavLink>
                        <NavLink to="/articles" className="btn-ghost">Read Articles</NavLink>
                    </Styled.CTAs>

                    <Styled.MetaRow>
                        <span className="chip">Frontend-only</span>
                        <span className="chip">JSON-driven</span>
                        <span className="chip">Responsive</span>
                    </Styled.MetaRow>
                </Styled.Hero>

                <Styled.Grid>
                    <Styled.GridCard className="card">
                        <h3>Philanthropy</h3>
                        <p>
                            Frictionless support for missions that matter—multi-year, general
                            operating, focused on outcomes.
                        </p>
                        <NavLink to="/our-work/philanthropy" className="link">Learn more →</NavLink>
                    </Styled.GridCard>

                    <Styled.GridCard className="card">
                        <h3>Venture Capital</h3>
                        <p>
                            Market-scale solutions in climate, health, education, and media.
                            Filterable portfolio, client-side.
                        </p>
                        <NavLink to="/our-work/venture-capital" className="link">View portfolio →</NavLink>
                    </Styled.GridCard>

                    <Styled.GridCard className="card">
                        <h3>Articles</h3>
                        <p>
                            Stories and interviews rendered from JSON/MDX. Clean slugs, good
                            SEO, fast paint.
                        </p>
                        <NavLink to="/articles" className="link">Browse articles →</NavLink>
                    </Styled.GridCard>
                </Styled.Grid>
            </Styled.Main>
        </Styled.Wrapper>
    );
}
