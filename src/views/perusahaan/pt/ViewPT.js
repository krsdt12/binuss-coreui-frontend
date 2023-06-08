import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CImage,
  CRow,
} from "@coreui/react";
import React from "react";
import logo from "../../../assets/images/Logo/Binuss-logo.jpg";

const ViewPT = () => {
  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          <strong>PT. ABC</strong>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol lg={4} className="px-5 mb-5">
              <CImage src={logo} thumbnail />
            </CCol>
            <CCol className="mx-5">
              <CRow>
                <CCol xs={4}>Nama PT</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>PT. ABC</CCol>
              </CRow>
              <CRow>
                <CCol xs={4}>Kota</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>Kabupaten Boyolali</CCol>
              </CRow>
              <CRow>
                <CCol xs={4}>Alamat Lengkap</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>
                  JL Boyolali - Klaten KM 5, Karanglor, RT.03/RW.06, Jurug,
                  Mojosongo, Kab. Boyolali.
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={4}>No. Telpon</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>0854887555</CCol>
              </CRow>
              <CRow>
                <CCol xs={4}>Alamat Email</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>abc@abc.co.id</CCol>
              </CRow>
              <CRow>
                <CCol xs={4}>NPWP</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>9452661770001</CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default ViewPT;
