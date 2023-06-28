import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButtonGroup,
  CButton,
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
  CImage,
  CRow,
} from "@coreui/react";
import React from "react";
import logo from "../../../assets/images/Logo/Binuss-logo.jpg";
import { AiOutlineLeft, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import CIcon from "@coreui/icons-react";
import { cilLocationPin } from "@coreui/icons";

const ViewPT = () => {
  return (
    <CContainer>
      <CRow>
        <CCol lg={8} className="mb-3">
          <CCard>
            <CCardHeader style={{ height: 55 }}>
              <CRow>
                <CCol sm={9} className="align-self-center">
                  <span>
                    <b>Profil PT</b>
                  </span>
                </CCol>
                <CCol sm={3} align="right">
                  <CButtonGroup role="group">
                    <CButton color="secondary" variant="ghost">
                      <AiOutlineLeft />
                    </CButton>
                    <CButton color="success" variant="ghost">
                      <AiOutlineEdit />
                    </CButton>
                    <CButton color="danger" variant="ghost">
                      <AiOutlineDelete />
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow className="pt-2 ms-3 mb-3 me-3">
                <CCol lg={4} className="mb-2">
                  <CImage src={logo} thumbnail />
                </CCol>
                <CCol>
                  <h2 className="mb-0">PT BINUSS</h2>
                  <p style={{ color: "#9da5b1" }}>
                    <CIcon icon={cilLocationPin} className="me-1"></CIcon>
                    Boyolali
                  </p>
                  <hr />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={4} className="mb-3">
          <CCard>
            <CCardHeader style={{ height: 55 }}>
              <CRow>
                <CCol sm={9} className="align-self-center">
                  <span>
                    <b>Lokasi Pada Peta</b>
                  </span>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1330545367246!2d110.6182422759739!3d-7.560468574663712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6bfc5e338b7d%3A0xd807cb17d5d9064!2sPT.%20BINA%20UTAMA%20SEJAHTERA%20SEJATI!5e0!3m2!1sid!2sid!4v1687933680118!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                title="mapPT"
              ></iframe>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol>
          <CCard>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink href="#" active>
                  Profil Perusahaan
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Data Karyawan</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Data Armada</CNavLink>
              </CNavItem>
            </CNav>
            <CCardBody className="mx-3">
              <CRow>
                <CCol xs={2}>Nama PT</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>PT. ABC</CCol>
              </CRow>
              <CRow>
                <CCol xs={2}>Alamat Lengkap</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>
                  JL Boyolali - Klaten KM 5, Karanglor, RT.03/RW.06, Jurug,
                  Mojosongo, Kab. Boyolali.
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={2}>No. Telpon</CCol>

                <CCol xs="auto">:</CCol>
                <CCol>0854887555</CCol>
              </CRow>
              <CRow>
                <CCol xs={2}>Alamat Email</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>abc@abc.co.id</CCol>
              </CRow>
              <CRow>
                <CCol xs={2}>NPWP</CCol>
                <CCol xs="auto">:</CCol>
                <CCol>9452661770001</CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ViewPT;
