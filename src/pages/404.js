import React from "react"
import Layout from "../components/layout"
import OtherHeader from "../components/OtherHeader"
import SEO from "../components/seo"
import QueryGaleryPage from "../queries/galery"

const NotFoundPage = () => { 

    const { imagenDePortada } = QueryGaleryPage() 

  return (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <OtherHeader 
            hero={ imagenDePortada }
            title={ 'Página no encontrada' }
        />
        <main>
            <h1>404</h1>
        </main>
      </Layout>
    </>
  )
}

export default NotFoundPage 
