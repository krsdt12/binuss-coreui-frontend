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
  CTableRow
} from '@coreui/react'
import React from 'react'
import logo from '../../../assets/images/Logo/Binuss-logo.jpg'
import { 
  AiOutlineEye, 
  AiOutlineEdit 
} from "react-icons/ai"
import CIcon from '@coreui/icons-react'

const pt = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data PT</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Logo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama PT</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                  <CTableHeaderCell scope="col">No. Telpon</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell><CImage src={logo} alt="logo" height={50} /></CTableDataCell>
                  <CTableDataCell>PT. BINA UTAMA SEJAHTERA SEJATI</CTableDataCell>
                  <CTableDataCell>Boyolali</CTableDataCell>
                  <CTableDataCell>08916627772</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="success" variant="ghost"><AiOutlineEdit /></CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="info" variant="ghost"><AiOutlineEye /></CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default pt