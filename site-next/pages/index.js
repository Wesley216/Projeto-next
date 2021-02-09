import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

import Footer from '../components/GlobalStyled/Footer';

const SubTitle = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <header>
        <img src={props.avatar_url}></img>
        <Link href="/sobre">
        <a>
          <h1>Blog</h1>
        </a>
        </Link>
      </header>

      <section className="postsContainer">

        <SubTitle>Posts</SubTitle>

        <article className="postsContainer__post">
        <a href="/">
            Texto 1
          </a>

          <p>
            Descrição
          </p>

        </article>
      </section>

      <section className="postsContainer">

        <SubTitle>Repositorios</SubTitle>

        {
          props.reposit.map((project)=>{
            return(

              <article key={project.repo}
              className="postsContainer__post">

                

                <a href="/">
                  {project.repo}
                </a>

            <p>
              {project.description}
            </p>

          </article>
            )
          })
        }
      </section>
      <Footer>

      </Footer>
  </div>
  )
}

export async function getStaticProps(){

   const github = await fetch('https://api.github.com/users/Wesley216')
    .then(res => res.json())

    const reposit = await fetch('https://gh-pinned-repos.now.sh/?username=Wesley216')
    .then(res => res.json())
  return {
    props:{
      avatar_url: github.avatar_url,
      reposit,
    }
  }
}
