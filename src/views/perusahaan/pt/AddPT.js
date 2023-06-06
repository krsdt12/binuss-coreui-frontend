import {
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormTextarea,
  CInputGroupText,
  CRow,
  CCard,
} from "@coreui/react";
import React from "react";

const AddPT = () => {
  return (
    <CContainer>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Tambah PT Baru</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Isi data PT yang akan ditambahan sesuai form dibawah.
            </p>
            <CRow>
              <CForm className="row g-3">
                <CRow className="mb-3">
                  <CCol xs={12}>
                    <CFormLabel htmlFor="inputNamaPT">Nama PT</CFormLabel>
                    <CFormInput
                      id="inputNamaPT"
                      placeholder="Contoh : PT. Maju Mundur"
                      required
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md={6}>
                    <CRow>
                      <CCol>
                        <CFormLabel htmlFor="inputAlamatPT">
                          Alamat Lengkap PT
                        </CFormLabel>
                        <CFormTextarea
                          id="inputAlamatPT"
                          placeholder="Contoh : Jl. Mangga 2, Kelurahan Abc, Kecamatan BBC"
                          rows={4}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol md={6}>
                    <CRow>
                      <CCol>
                        <CFormLabel htmlFor="inputEmailPT">Email PT</CFormLabel>
                        <CFormInput
                          id="inputEmailPT"
                          placeholder="Contoh : majumundur@gmail.co.id"
                          type="email"
                          required
                        />
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel htmlFor="inputNoTelpPT">
                        No. Telpon PT
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>+62</CInputGroupText>
                        <CFormInput id="inputNoTelpPT" required />
                      </CInputGroup>
                    </CRow>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputKotaPT">Kota</CFormLabel>
                    <CFormInput
                      id="inputKotaPT"
                      placeholder="Contoh : Jakarta"
                      required
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="inputNPWPPT">NPWP PT</CFormLabel>
                    <CFormInput id="inputNPWPPT" required />
                  </CCol>
                </CRow>
              </CForm>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CContainer>
  );
};

export default AddPT;
