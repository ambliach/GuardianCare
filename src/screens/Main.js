import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron  from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';
import ImagesLayout from '../components/ImagesLayout';
import './Main.css';

const Main = (props) => {
  const { isLoggedIn, email } = props;
  const [description, setDescription] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [arrMediaInfo, setMediaInfo] = useState([]);
  let cloudinaryUrl = '';
  let source = {};

  // get user's stored pictures
  const getMediaInfo = useCallback(() => {
    API
      .getMediaInfo(source)
      .then(res => setMediaInfo(res.data.pics))
      .catch((err) => {
        console.log(`Something went wrong in data retrieval ${JSON.stringify(err)}`);
      });
  }, [arrMediaInfo]);

  useEffect(() => {
    source = axios.CancelToken.source();
    getMediaInfo();

    return function cleanup() { // like ComponentWillUnmount
      API.cancelRequest(source);
    };
  }, []); // like ComponentDidMount()

  const resetValues = () => {
    setIsValid(true);
    setDescription('');
    setIsSubmitted(true);
    cloudinaryUrl = '';
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(cloudinaryUrl && description)) {
      setIsValid(false);
      return;
    }
    API
      .postInfo({
        picUrl: cloudinaryUrl,
        note: description,
      }, source)
      .then(() => {
        getMediaInfo();
        resetValues();
      })
      .catch(err => console.log(err));
  };

  const setCloudinaryInfo = (imgUrl) => {
    cloudinaryUrl = imgUrl;
  };

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8}>
          <h3 className="text-center">
            Main page
            {' '}
            {email}
          </h3>
          <Form>
            <h3>Upload Picture</h3>
            <Form.Group>
              <Form.Label htmlFor="description">
              Description
                <Form.Control
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleOnChange}
                  placeholder="Enter description"
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <CloudinaryUploadWidget
                className="cloudinary-button"
                cloudinaryInfo={setCloudinaryInfo}
                isSubmitted={isSubmitted}
              />
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-success add_to_album_btn"
              onClick={handleSubmit}
            >
              Add to Album
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {
          !isValid
            ? (
              <p className="bg-danger text-white font-weight-bold">
            Both description and url must be entered to complete submission.
              </p>
            )
            : null
        }
      </Row>
      <Row className="justify-content-center">
        <ImagesLayout images={arrMediaInfo} />
      </Row>

    <Jumbotron>
     <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>Patient's First Name</Form.Label>
      <Form.Control placeholder="First Name" />
    </Form.Group>
​
        <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Patient's Last Name</Form.Label>
      <Form.Control placeholder="Last Name" />
    </Form.Group>
      </Form.Row>

<Form.Row>
 <Form.Group controlID="formgridMental">
  <Form.Label>Mental Rating</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</Form.Control>
</Form.Group>
</Form.Row>

<Form.Row>
 <Form.Group controlID="formgridRespiration">
  <Form.Label>Respiration Rating</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</Form.Control>
</Form.Group>
</Form.Row>

<Form.Row>
 <Form.Group controlID="formgridGastro">
  <Form.Label>Gastrointestinal Rating</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</Form.Control>
</Form.Group>
</Form.Row>

<Form.Row>
 <Form.Group controlID="formgridUrinary">
  <Form.Label>Urinary Rating</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</Form.Control>
</Form.Group>
</Form.Row>

<Form.Row>
 <Form.Group controlID="formgridMuscular">
  <Form.Label>Muscular Rating</Form.Label>
  <Form.Control as="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</Form.Control>
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group controlId="formgridComments">
    <Form.Label>Comments:</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
     <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Date</Form.Label>
      <Form.Control type='date' placeholder="xx/xx/xxxx" />
    </Form.Group>
      </Form.Row>

    </Jumbotron>
</Container>
  );
};

Main.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default Main;
