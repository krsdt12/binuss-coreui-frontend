import {
  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CTableHeaderCell,
  CCol,
  CImage,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
  CContainer,
} from "@coreui/react";
import React from "react";
import logo from "../../../assets/images/Logo/Binuss-logo.jpg";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

const pt = () => {
  return (
    <CContainer fluid>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data PT</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol align="right">
                <CButton color="primary" href="/pt/add">
                  <CRow>
                    <CCol lg={3} md={3}>
                      <CIcon
                        icon={cilPlus}
                        height={20}
                        className="align-middle"
                      />
                    </CCol>
                    <CCol className="d-none d-md-block">
                      <span> Tambah Data</span>
                    </CCol>
                  </CRow>
                </CButton>
              </CCol>
            </CRow>
            <CTable align="middle" responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Logo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama PT</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                  <CTableHeaderCell scope="col">No. Telpon</CTableHeaderCell>
                  <CTableHeaderCell scope="col" colSpan={3} class="text-center">
                    Action
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>
                    <CImage src={logo} alt="logo" height={50} />
                  </CTableDataCell>
                  <CTableDataCell>
                    PT. BINA UTAMA SEJAHTERA SEJATI
                  </CTableDataCell>
                  <CTableDataCell>Boyolali</CTableDataCell>
                  <CTableDataCell>08916627772</CTableDataCell>
                  <CTableDataCell width={50}>
                    <CButton color="info" variant="ghost" href="/pt/view">
                      <AiOutlineEye />
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell width={50}>
                    <CButton color="success" variant="ghost">
                      <AiOutlineEdit />
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell width={50}>
                    <CButton color="danger" variant="ghost">
                      <AiOutlineDelete />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CContainer>
  );
};

export default pt;
