// Profile.js
import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "antd";
import "../Profile.css";

function Profile() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Page</h1>
      </div>
      <div className="profile-details">
        <p>
          <span>Name:</span> {user?.name}
        </p>
        <p>
          <span>Email:</span> {user?.email}
        </p>

        <Card className="big-card">
          <Row gutter={16}>
            <Col span={12}>
              <div className="big-card-section age">
                <span>
                  <i class="ri-calendar-line"></i> Age
                </span>
                <p>Age: {user?.age}</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="big-card-section hgt">
                <span>
                  <i class="ri-line-chart-line"></i> Height
                </span>
                <p>Height: {user?.height}</p>
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <div className="big-card-section wt">
                <span>
                  <i class="ri-footprint-line"></i> Weight
                </span>
                <p>Weight: {user?.weight}</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="big-card-section bld">
                <span>
                  <i class="ri-drop-line"></i> Blood
                </span>
                <p>Blood Type: {user?.bloodType}</p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
