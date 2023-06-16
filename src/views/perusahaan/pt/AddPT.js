import {
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CButton,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormTextarea,
  CInputGroupText,
  CFormCheck,
  CFormFeedback,
  CRow,
  CCard,
  CImage,
} from "@coreui/react";
import { BsBuildingAdd } from "react-icons/bs";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import React, { useState } from "react";

const AddPT = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const [file, setFile] = useState();
  function handleChange(e) {
    const gambar = e.target.files;
    // if (gambar.name.match(/\.(jpg|jpeg|png|gif)$/)) {
    setFile(URL.createObjectURL(gambar[0]));
    // } else {
    //   alert("Hanya menerima file berupa gambar!");
    //   setFile(null);
    // }
  }

  return (
    <CContainer>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <BsBuildingAdd />
            <strong> Tambah PT Baru</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Isi data PT yang akan ditambahan sesuai form dibawah.
            </p>
            <CRow>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <CRow>
                  <CCol xs={12} className="mb-4">
                    <CFormLabel htmlFor="inputNamaPT">Nama PT</CFormLabel>
                    <CFormInput
                      id="inputNamaPT"
                      placeholder="Contoh : PT. Maju Mundur"
                      required
                    />
                    <CFormFeedback invalid>
                      Harap masukkan Nama PT dengan benar!
                    </CFormFeedback>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={6}>
                    <CRow>
                      <CCol className="mb-4">
                        <CFormLabel htmlFor="inputAlamatPT">
                          Alamat Lengkap
                        </CFormLabel>
                        <CFormTextarea
                          id="inputAlamatPT"
                          placeholder="Contoh : Jl. Mangga 2, Kelurahan Abc, Kecamatan BBC"
                          rows={4.5}
                          required
                        />
                        <CFormFeedback invalid>
                          Harap masukkan Alamat Lengkap dengan benar!
                        </CFormFeedback>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6}>
                    <CRow>
                      <CCol className="mb-4">
                        <CFormLabel htmlFor="inputEmailPT">Email</CFormLabel>
                        <CFormInput
                          id="inputEmailPT"
                          placeholder="Contoh : majumundur@gmail.co.id"
                          type="email"
                          required
                        />
                        <CFormFeedback invalid>
                          Harap masukkan Email dengan benar!
                        </CFormFeedback>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CFormLabel htmlFor="inputNoTelpPT">
                        No. Telpon
                      </CFormLabel>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>+62</CInputGroupText>
                        <CFormInput id="inputNoTelpPT" required />
                      </CInputGroup>
                      <CFormFeedback invalid>
                        Harap masukkan No. Telpon dengan benar!
                      </CFormFeedback>
                    </CRow>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md={6} className="mb-4">
                    <CFormLabel htmlFor="inputKotaPT">Kota</CFormLabel>
                    <CFormInput
                      id="inputKotaPT"
                      placeholder="Contoh : Jakarta"
                      required
                    />
                    <CFormFeedback invalid>
                      Harap masukkan Kota dengan benar!
                    </CFormFeedback>
                  </CCol>
                  <CCol md={6} className="mb-4">
                    <CFormLabel htmlFor="inputNPWPPT">NPWP PT</CFormLabel>
                    <CFormInput id="inputNPWPPT" required />
                  </CCol>
                </CRow>
                <CRow class="h-100">
                  <CCol md={6} className="mb-4">
                    <CFormLabel htmlFor="inputLogoPT">Logo PT</CFormLabel>
                    <CFormInput
                      type="file"
                      id="inputLogoPT"
                      placeholder="Upload Logo PT"
                      onChange={handleChange}
                      accept="image/jpg, image/jpeg, image/png"
                      required
                    />
                  </CCol>
                  <CCol md={6} align="center" className="mb-4">
                    <CFormFeedback invalid>
                      Harap masukkan Logo PT dengan benar!
                    </CFormFeedback>
                    {file ? (
                      <CImage src={file} width={400} alt="Logo PT" thumbnail />
                    ) : null}
                  </CCol>
                </CRow>
                <CRow xs={12} className="mb-4">
                  <CCol>
                    <CFormCheck
                      id="isActive"
                      label="Sudah/Masih Beroperasi"
                      defaultChecked
                    />
                  </CCol>
                </CRow>
                <CRow xs={12} className="mb-4 mt-5">
                  <CCol align="center">
                    <CButton
                      color="light"
                      type="button"
                      href="/pt"
                      className="mx-2"
                    >
                      <RiArrowLeftSLine />
                      Kembali
                    </CButton>
                    <CButton color="primary" type="submit" className="mx-2">
                      Submit <RiArrowRightSLine />
                    </CButton>
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
