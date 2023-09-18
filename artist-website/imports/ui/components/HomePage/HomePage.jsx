import React, { useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import PortfolioHighlight from '../PortfolioHighlight/PortfolioHighlight';
import Accordion from '../../UIComponents/Accordion/Accordion';
import Alert from '../../UIComponents/Alert/Alert';
import Align from '../../UIComponents/Align/Align';
import Animation from '../../UIComponents/Animation/Animation';
import AppBars from '../../UIComponents/AppBars/AppBars';
import Article from '../../UIComponents/Article/Article';
import Background from '../../UIComponents/Background/Background';
import Badge from '../../UIComponents/Badges/Badges';
import Button from '../../UIComponents/Button/Button';
import BottomAppBar from '../../UIComponents/BottomAppBar/BottomAppBar';
import BottomSheet from '../../UIComponents/BottomSheets/BottomSheets';
import Breadcrumb from '../../UIComponents/Breadcrumb/Breadcrumb';
import Chips from '../../UIComponents/Chips/Chips';
import Card from '../../UIComponents/Cards/Cards';
import ColumnLayout from '../../UIComponents/Column/Column';
import Comment from '../../UIComponents/Comment/Comment';
import Container from '../../UIComponents/Container/Container';
import Countdown from '../../UIComponents/Countdown/Countdown';
import Cover from '../../UIComponents/Cover/Cover';
import DataTable from '../../UIComponents/DataTables/DataTables';
import DatePicker from '../../UIComponents/DatePicker/DatePicker';
import DescriptionList from '../../UIComponents/DescriptionList/DescriptionList';
import Dialog from '../../UIComponents/Dialogs/Dialogs';
import Divider from '../../UIComponents/Dividers/Dividers';
import Dotnav from '../../UIComponents/Dotnav/Dotnav';
import Dropdown from '../../UIComponents/Dropdown/Dropdown';
import Drop from '../../UIComponents/Drop/Drop';
import Dropbar from '../../UIComponents/Dropbar/Dropbar';
import Dropnav from '../../UIComponents/Dropnav/Dropnav';
import ExtendedFAB from '../../UIComponents/ExtendedFAB/ExtendedFAB';
import Filter from '../../UIComponents/Filter/Filter';
import FloatingActionButtons from '../../UIComponents/FloatingActionButtons/FloatingActionButtons';
import Form from '../../UIComponents/Form/Form';
import Heading from '../../UIComponents/Heading/Heading';
import Grid from '../../UIComponents/Grid/Grid';
import Image from '../../UIComponents/Image/Image';
import Label from '../../UIComponents/Label/Label';
import Leader from '../../UIComponents/Leader/Leader';
import Lightbox from '../../UIComponents/Lightbox/Lightbox';
import Link from '../../UIComponents/Link/Link';
import List from '../../UIComponents/List/List';
import Menus from '../../UIComponents/Menus/Menus';
import OffCanvas from '../../UIComponents/OffCanvas/OffCanvas';
import Overlay from '../../UIComponents/Overlay/Overlay';
import Modal from '../../UIComponents/Modal/Modal';
import Nav from '../../UIComponents/Nav/Nav';

const HomePage = () => {
  const blogPosts = [
    { title: 'Blog post 1', content: 'This is the first blog post.' },
    { title: 'Blog post 2', content: 'This is the second blog post.' },
    // Add more blog posts as needed
  ];

  const portfolioHighlights = [
    { title: 'Portfolio piece 1', image: '/path/to/image.jpg', description: 'This is the first portfolio piece.' },
    { title: 'Portfolio piece 2', image: '/path/to/image.jpg', description: 'This is the second portfolio piece.' },
    // Add more portfolio pieces as needed
  ];
  const actions = [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
  ];
  const items = [
    { icon: 'home-icon.png', label: 'Home' },
    { icon: 'search-icon.png', label: 'Search' },
    { icon: 'settings-icon.png', label: 'Settings' },
  ];
  const [isSheetOpen, setSheetOpen] = useState(false);
  const breadcrumbItems = [
    { label: 'Home' },
    { label: 'Products' },
    { label: 'Electronics' },
    { label: 'Laptops' },
  ];
  const [chips, setChips] = useState([
    { id: '1', label: 'Apple' },
    { id: '2', label: 'Banana' },
    { id: '3', label: 'Cherry' },
  ]);
  const handleDelete = (id) => {
    setChips(chips.filter(chip => chip.id !== id));
  };
  const targetDate = new Date('2023-12-31T00:00:00');
  const headers = ['Name', 'Age', 'Email'];
  const data = [
    { Name: 'Alice', Age: 28, Email: 'alice@example.com' },
    { Name: 'Bob', Age: 32, Email: 'bob@example.com' },
    { Name: 'Charlie', Age: 22, Email: 'charlie@example.com' },
  ];
  const handleDateChange = (date) => {
    console.log(`Selected date: ${date}`);
  };

  const descriptionData = {
    'Name': 'Alice',
    'Age': 28,
    'Email': 'alice@example.com'
  };
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  const dropnavItems = [
    { label: 'Home', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Contact', link: '#' },
  ];
  const triggerElement = <button>Hover Me!</button>;
  const dropContent = <div>Your Drop Content Here</div>;
  const dropbarContent = <div>Your Dropbar Content Here</div>;
  const menuItems = [
    {
      label: 'Home',
      dropdownContent: <div>Home Content</div>,
    },
    {
      label: 'About',
      dropdownContent: <div>About Content</div>,
    },
    // Add more items here
  ];
  const handleClick = () => {
    alert('Extended FAB clicked!');
  };
  const [data2, setData2] = useState(['Apple', 'Banana', 'Cherry']);
  const [filteredData, setFilteredData] = useState(data2);

  const handleFilter = (term) => {
    setFilteredData(
      data2.filter((item) => item.toLowerCase().includes(term.toLowerCase()))
    );
  };
  const handleClick2 = () => {
    alert('FAB Clicked!');
  };
  const handleSubmit = (value) => {
    alert(`Form submitted with value: ${value}`);
  };
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];
  return (
    <div>
      <h1>Welcome to My Artist Website</h1>
      <p>This is a brief introduction to who I am and what I do.</p>
     
      <div>
        <Nav items={navItems} />
        <div>
          <button onClick={toggleModal}>Open Modal</button>
          <Modal show={showModal} onClose={toggleModal}>
            <h1>Hello, I'm a Modal!</h1>
            <p>This is the modal content.</p>
          </Modal>
        </div>
        <button onClick={toggleOverlay}>Toggle Overlay</button>
        <Overlay show={showOverlay} onClick={toggleOverlay} />

        <OffCanvas>
          <p>Some sidebar content here.</p>
        </OffCanvas>
        <Menus options={['Option 1', 'Option 2', 'Option 3']} />
        <List items={['Apple', 'Banana', 'Cherry']} />
        <List items={['First', 'Second', 'Third']} ordered />
        <Link to="/about" label="About Us" />
        <Link to="https://www.example.com" label="Visit Example" external />
        <Lightbox src="https://placeholder.co/600" alt="Description" />
        <Leader title="Chicken Curry" content="$12.99" />
        <Leader title="Introduction" content="Page 1" />
        <div>
          <Label content="Important Note" type="important" />

          <Label content="Highlighted Content" type="highlight" />
        </div>
        <Image src="https://placeholder.co/300" alt="Description" rounded />
        
        <div>
          <Grid columns={3}>
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
          </Grid>
          <div>
            <Heading level={1} text="This is an H1 Heading" />
            <Heading level={2} text="This is an H2 Heading" />
            <Heading level={3} text="This is an H3 Heading" />
          </div>
          <div>
            <h1>Form Example</h1>
            <Form onSubmit={handleSubmit} />
          </div>
          <div>
            <h1>Floating Action Button Example</h1>
            <FloatingActionButtons onClick={handleClick2} />
          </div>
          <div>
            <h1>Filter Component Example</h1>
            <Filter data={data} onFilter={handleFilter} />
            <ul>
              {filteredData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1>ExtendedFAB Component Example</h1>
            <ExtendedFAB
              label="Add Item"
              icon={<i className="material-icons">add</i>}
              onClick={handleClick}
            />
          </div>
          <h1>Drop</h1>
          <Drop trigger={triggerElement} content={dropContent} />

          <div>
            <h1>Dropbar Component Example</h1>
            <Dropbar triggerElement={triggerElement} dropbarContent={dropbarContent} />
          </div>

          <h1>Dropdown</h1>
          <Dropdown options={dropdownOptions} onSelect={(option) => alert(option)} />

          <div>
            <h1>Dropnav Component Example</h1>
            <Dropnav menuItems={menuItems} />
          </div>
        </div>
        <div>
          <h1>Dialog</h1>
          <button onClick={() => setDialogOpen(true)}>Open Dialog</button>
          <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
            <p>This is a dialog.</p>
          </Dialog>

          <h1>Divider</h1>
          <Divider />

          <h1>Dotnav</h1>
          <Dotnav count={5} activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>
        <div>
        <h1>Date Picker</h1>
        <DatePicker onDateChange={handleDateChange} />

        <h1>Description List</h1>
        <DescriptionList data={descriptionData} />
      </div>
        <div>

        <div>
          <h1>Data Table</h1>
          <DataTable headers={headers} data={data} />
        </div>
          <Cover mediaType="image" mediaSrc="https://placeholder.co/300">
            <h1>Your Content Here</h1>
          </Cover>
        </div>
        <div>
          <Card
            title="Card Title"
            content="This is the content of the card."
            imageSrc="https://placeholder.co/300"
          />
        </div>
        <Container maxWidth="800px">
          <h1>Hello, World!</h1>
          <p>This is a container.</p>
        </Container>
        <div>
          <h1>Countdown to New Year</h1>
          <Countdown targetDate={targetDate} />
        </div>
        <div>
          <Comment 
            author="John Doe" 
            content="This is a sample comment." 
            timestamp="2023-09-14 12:34" 
          />
        </div>
        <ColumnLayout spacing="normal">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </ColumnLayout>
        
        <div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div>
          <Chips items={chips} onDelete={handleDelete} />
        </div>
        <div>
          <Button onClick={() => setSheetOpen(true)} label="Open Bottom Sheet" />
            <BottomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)}>
              {/* Your content here */}
              <p>This is a bottom sheet.</p>
          </BottomSheet>
        </div>
        <Background type="gradient">
          <h1>My App</h1>
      
          <AppBars title="My App" actions={actions} />
 
          
          <Article 
            title="Sample Article" 
            content="This is the content of the sample article." 
            author="John Doe" 
          />
        </Background>
          <Accordion title="Accordion 1">
              <p>This is the content for accordion 1.</p>
          </Accordion>
          <Accordion title="Accordion 2">
              <p>This is the content for accordion 2.</p>
          </Accordion>
      </div>
      <div>
          <Alert type="info" message="This is an info alert." />
          <Alert type="success" message="This is a success alert." />
          <Alert type="warning" message="This is a warning alert." />
          <Alert type="error" message="This is an error alert." />
      </div>
      <div>
          <Align direction="left">
              <div>Left Aligned</div>
          </Align>
          <Align direction="center">
              <div>Center Aligned</div>
          </Align>
          <Align direction="right">
              <div>Right Aligned</div>
          </Align>
      </div>
      <div>
        <Animation type="fadeIn" duration={2}>
          <div>Fade In</div>
        </Animation>
        <Animation type="slideIn" duration={1}>
          <div>Slide In</div>
        </Animation>
        <Animation type="bounce" duration={1.5}>
          <div>Bounce</div>
        </Animation>
      </div>
      <Badge count={5}>
      <Button label="Click Me!" />
    </Badge>
    <div>
    <BottomAppBar items={items} />
    </div>
    
    {/* end */}
    </div>
    
  );
};

export default HomePage;
