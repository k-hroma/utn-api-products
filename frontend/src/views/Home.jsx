import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { getProducts, deleteProduct, searchByName } from "../services/products"
import { useAuth } from "../context/AuthContext"

const Home = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const { user } = useAuth()

  const fetchProducts = async () => {
    const response = await getProducts()
    const responseToJson = await response.json()

    if (response.ok) {
      setProducts(responseToJson.data)
    }
  }

  const handleClick = async (id) => {
    if (confirm("Esta seguro que quieres borrar el producto?")) {
      const response = await deleteProduct(id)
      if (!response.ok) {
        alert("Error al borrar producto.")
      } else {
        alert("Producto borrado con éxito.")
        fetchProducts()
      }
    }
  }

  //Cuando cambia searchTerm, buscar o cargar todos los productos si está vacío
  const fetchFilteredProducts = async () => {
    try {
      // si está vacío cargo todos los productos
      if (searchTerm.trim() === "") {
        fetchProducts()
      } else {
        // si hay busqueda por nombre -> muestro sólo los que coinciden
        const response = await searchByName(searchTerm)
        const responseToJson = await response.json()
        if (!response.ok) {
          throw new Error("Unexpected error at fetching products")
        }
        setProducts(responseToJson.data)
      };

      } catch (error) {
        const errMsg = error instanceof Error ? error.message : "Unknown error";
        console.log(errMsg);
      }
    }

  useEffect(() => {
    fetchFilteredProducts()
  }, [searchTerm])

  return (
    <Layout>
      <h1>Bienvenido a nuestra tienda de productos artesanales</h1>
      <p>Descubrí nuestra selección exclusiva de productos únicos hechos a mano. Calidad y diseño en cada detalle.</p>
      <form onSubmit={(e) => {
          e.preventDefault()
        }} >
        <input type="text" placeholder="Buscar producto por nombre..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
      {
        searchTerm.trim() !== "" && products.length === 0 && (
        <p style={{ marginTop: "0.5rem", color: "red" }}> Producto no encontrado</p>)
      }

      <section>
        {
          products.map(product => (
            <div key={product._id}>
              <p><b>Nombre:</b> {product.name}</p>
              <p><b>Precio:</b> {product.price}</p>
              <p><b>Categoria:</b> {product.category}</p>
              {
                user && <div className="cont-button-product">
                  <button onClick={() => handleClick(product._id)}>Borrar</button>
                </div>
              }
            </div>
          ))
        }
      </section>
    </Layout>
  )
}

export { Home }