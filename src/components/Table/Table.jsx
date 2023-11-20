import classNames from 'classnames/bind';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import styles from './Table.module.scss';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog'; 
import EditForm from '../Modal/product/EditForm/EditForm';
import DeleteForm from '../Modal/product/DeleteForm/DeleteForm';
import useApiProducts from '../../components/customHook/useApiProduct';
import Skeleton from '@mui/material/Skeleton';

const cx = classNames.bind(styles);



// const products = [{
//     id: 1,
//     name: "Áo thun trắng",
//     brand: "Nike",
//     category: "Áo thun",
//     description: "Áo thun trắng đơn giản",
//     price: 20,
//     rating: 1,
//     numOfReviews: 10,
//     countInStock: 30,
//   },
//   {
//     id: 2,
//     name: "Quần jeans đen",
//     brand: "Levi's",
//     category: "Quần jeans",
//     description: "Quần jeans đen thời trang",
//     price: 45,
//     rating: 0.5,
//     numOfReviews: 15,
//     countInStock: 20,
//   },
//   {
//     id: 3,
//     name: "Giày thể thao",
//     brand: "Adidas",
//     category: "Giày thể thao",
//     description: "Giày thể thao chất lượng cao",
//     price: 60,
//     rating: 2.5,
//     numOfReviews: 8,
//     countInStock: 25,
//   },
//   {
//     id: 4,
//     name: "Balo du lịch",
//     brand: "Samsonite",
//     category: "Balo",
//     description: "Balo du lịch tiện dụng",
//     price: 80,
//     rating: 0.5,
//     numOfReviews: 12,
//     countInStock: 15,
//   },
//   {
//     id: 5,
//     name: "Đồng hồ nam",
//     brand: "Casio",
//     category: "Đồng hồ",
//     description: "Đồng hồ nam đẹp",
//     price: 30,
//     rating: 1,
//     numOfReviews: 18,
//     countInStock: 0,
//   },
//   {
//     id: 6,
//     name: "Váy hoa",
//     brand: "Zara",
//     category: "Váy",
//     description: "Váy hoa thời trang",
//     price: 35,
//     rating: 0.5,
//     numOfReviews: 14,
//     countInStock: 22,
//   },
//   {
//     id: 7,
//     name: "Túi xách nữ",
//     brand: "Michael Kors",
//     category: "Túi xách",
//     description: "Túi xách nữ sang trọng",
//     price: 70,
//     rating: 1,
//     numOfReviews: 9,
//     countInStock: 28,
//   },
//   {
//     id: 8,
//     name: "Áo khoác nam",
//     brand: "North Face",
//     category: "Áo khoác",
//     description: "Áo khoác nam ấm áp",
//     price: 55,
//     rating: 0.5,
//     numOfReviews: 11,
//     countInStock: 0,
//   },
//   {
//     id: 9,
//     name: "Mũ nam",
//     brand: "New Era",
//     category: "Mũ",
//     description: "Mũ nam thời trang",
//     price: 15,
//     rating: 1.5,
//     numOfReviews: 7,
//     countInStock: 35,
//   },
//   {
//     id: 10,
//     name: "Ghế sofa",
//     brand: "IKEA",
//     category: "Nội thất",
//     description: "Ghế sofa hiện đại",
//     price: 120,
//     rating: 0.5,
//     numOfReviews: 10,
//     countInStock: 12,
//   },
// ];


function TableRoom() {
    // Pagination
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openEditModal, setOpenEditModal] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const { products, loading } = useApiProducts(page);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
      
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        // setPage(0);
      };
      const handleEditClick = (product) => {
        // Set the selected product and open the Edit modal
        setSelectedProduct(product);
        setOpenEditModal(true);
    };

    const handleCloseEditModal = () => {
        // Close the Edit modal
        setOpenEditModal(false);
        setSelectedProduct(null); // Clear the selected product
    };
    console.log(products);
  

    return (
        <div>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Rating</TableCell> 
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ?
            (
            products['result'].slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage).map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.brand}</TableCell> 
               <div className={cx('')}>
                  Hii
               </div>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.countInStock > 0 ? product.countInStock +' items' : "Out of stock"}</TableCell>
                <TableCell>{product.price} $</TableCell>
                <TableCell>
                  <Rating name="product-rating" value={product.rating} readOnly precision={0.5} />
                </TableCell>
                <TableCell>
                  <Button
                    startIcon={<EditIcon />}
                    onClick={() => handleEditClick(product)}
                  >
                  </Button>
                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => { 
                      setProductToDelete(product);
                      setOpenDeleteModal(true);
                    }}
                  >
                 
                  </Button>
                </TableCell>
              </TableRow>
              
            ))
            
            )
            :
            (
            <div>
              <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
              <Skeleton variant="text" animation="wave" width={210} />
              <Skeleton variant="text" animation="wave" width={210} />
              </div>
            )
            }
          </TableBody>
          <Pagination
            count={Math.ceil(products['result'].length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Table>
       
        
      </TableContainer>

      <Dialog 
      open={openEditModal} onClose={handleCloseEditModal}>
                <EditForm  product={selectedProduct} onClose={handleCloseEditModal} />
      </Dialog>
        <DeleteForm
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      />
      </div>     
     
    );
}

export default TableRoom;
