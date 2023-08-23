import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Modal,
  Box,
} from "@mui/material"; // Importa los componentes de Material-UI
import Swal from "sweetalert2";
import "./CartContent.css";

const Checkout = () => {
  const { cart, setCart } = useContext(dataContext);
  const [formData, setFormData] = useState({
    shippingAddress: "",
    contactInfo: "",
    paymentDetails: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        title: "Error",
        text: "El carrito está vacío. Agrega productos antes de confirmar la compra.",
        icon: "error",
      });
    } else if (formData.paymentDetails) {
      // Calcular el total de la compra
      const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      // Mostrar el modal con los detalles de la compra
      setShowModal(true);
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor ingresa los detalles de pago",
        icon: "error",
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);

    // Resetear el carrito y los campos del formulario
    setCart([]);
    setFormData({
      shippingAddress: "",
      contactInfo: "",
      paymentDetails: "",
    });
    // Mostrar la alerta de compra exitosa
    Swal.fire({
      title: "¡Compra Exitosa!",
      text: "Gracias por tu compra. ¡Disfruta tus libros!",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <Container>
      <Navbar />
      <CartElements cart={cart} />
      <CartTotal cart={cart} />
      <Paper elevation={3} className="checkout-form">
        <Typography variant="h6">Formulario de Envío y Pago</Typography>
        <TextField
          label="Dirección de Envío"
          value={formData.shippingAddress}
          onChange={(e) =>
            setFormData({ ...formData, shippingAddress: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Información de Contacto"
          value={formData.contactInfo}
          onChange={(e) =>
            setFormData({ ...formData, contactInfo: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Detalles de Pago"
          value={formData.paymentDetails}
          onChange={(e) =>
            setFormData({ ...formData, paymentDetails: e.target.value })
          }
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Confirmar Compra
        </Button>
      </Paper>
      <Modal
        open={showModal}
        onClose={closeModal}
        aria-labelledby="detalle-compra-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 6,
          }}
        >
          <Typography
            id="detalle-compra-modal-title"
            variant="h5"
            component="h2"
          >
            Detalles de la Compra
          </Typography>
          {cart.map((item) => (
            <Typography key={item.id} variant="body2">
              {item.name} - Cantidad: {item.quantity} - Precio Unitario: $
              {item.price.toFixed(2)}
            </Typography>
          ))}
          <Typography variant="body2">
            Total: $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </Typography>
          <Button onClick={closeModal}>Finalizar</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Checkout;
