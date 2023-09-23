import React, { useState } from 'react';
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
import Navbar from '../../UIComponents/Navbar/Navbar';
import NavigationBar from '../../UIComponents/NavigationBar/NavigationBar';
import Notification from '../../UIComponents/Notification/Notification';
import Padding from '../../UIComponents/Padding/Padding';
import Pagination from '../../UIComponents/Pagination/Pagination';
import Parallax from '../../UIComponents/Parallax/Parallax';
import Progress from '../../UIComponents/Progress/Progress';
import ProgressIndicator from '../../UIComponents/ProgressIndicators/ProgressIndicators';
import Section from '../../UIComponents/Section/Section';
import SegmentedButton from '../../UIComponents/SegmentedButton/SegmentedButton';
import SlideNav from '../../UIComponents/Slidenav/Slidenav';
import Slider from '../../UIComponents/Slider/Slider';
import Sliders from '../../UIComponents/Sliders/Sliders';
import Slideshow from '../../UIComponents/Slideshow/Slideshow';
import Snackbar from '../../UIComponents/Snackbar/Snackbar';
import Snackbars from '../../UIComponents/Snackbars/Snackbars';
import Sortable from '../../UIComponents/Sortable/Sortable';
import Spinner from '../../UIComponents/Spinner/Spinner';
import Subnav from '../../UIComponents/Subnav/Subnav';
import SVG from '../../UIComponents/SVG/SVG';
import Switcher from '../../UIComponents/Switcher/Switcher';
import Switches from '../../UIComponents/Switches/Switches';
import Table from '../../UIComponents/Table/Table';
import Tabs from '../../UIComponents/Tabs/Tabs';
import Thumbnav from '../../UIComponents/Thumbnav/Thumbnav';
import Tile from '../../UIComponents/Tile/Tile';
import TimePicker from '../../UIComponents/TimePicker/TimePicker';
import Tooltip from '../../UIComponents/Tooltips/Tooltips';


const HomePage = () => {
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
  const navItems2 = [
    { id: '1', label: 'Home', href: '/', dropdown: null },
    { id: '2', label: 'About', href: '/about', dropdown: [{ label: 'Team', href: '/team' }, { label: 'History', href: '/history' }] },
    { id: '3', label: 'Services', href: '/services', dropdown: [{ label: 'Web Development', href: '/web-dev' }, { label: 'Design', href: '/design' }] },
    // ... more items
  ];
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [volume, setVolume] = useState(50);
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const itemsw = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const subnavItems = [
    { label: 'Sub Item 1', link: '#1' },
    { label: 'Sub Item 2', link: '#2' },
    { label: 'Sub Item 3', link: '#3' },
  ];
  const svgPath = "M10 1.6c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zM10 18c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM12.6 7.8l-4.6 4.6-1.4-1.4 4.6-4.6 1.4 1.4z";
  
  const handleSwitchChange = (newState) => {
    console.log("Switcher is now:", newState ? "ON" : "OFF");
  };
  const handleSwitchChange2 = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };
  const headers2 = ['Name', 'Age', 'Email'];
  const data3 = [
    { Name: 'Alice', Age: 28, Email: 'alice@example.com' },
    { Name: 'Bob', Age: 32, Email: 'bob@example.com' },
    { Name: 'Charlie', Age: 22, Email: 'charlie@example.com' },
  ];
  const tabsData = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];
  const thumbnavData = [
    { label: 'Item 1', thumbnail: 'https://placeholder.co/300', link: '#item1' },
    { label: 'Item 2', thumbnail: 'https://placeholder.co/300', link: '#item2' },
    { label: 'Item 3', thumbnail: 'https://placeholder.co/300', link: '#item3' },
  ];
  const handleTimeSelection = (selectedTime) => {
    console.log(`Selected Time: ${selectedTime}`);
  };
  const handleToggleChange2 = (isChecked) => {
    console.log(`Toggle is ${isChecked ? 'ON' : 'OFF'}`);
  };
  

  return (

    <div >
      <div>
        <h1>Tooltip Example</h1>
        <Tooltip content="This is a tooltip!">
          <button>Hover over me!</button>
        </Tooltip>
      </div>
      <div>
        <h1>TimePicker Component</h1>
        <TimePicker onTimeChange={handleTimeSelection} />
      </div>
      <div>
        <h1>Tile Component</h1>
        <Tile 
          image="https://placeholder.co/300"
          title="Tile Title"
          description="This is a description for the tile."
          onClick={() => console.log('Tile clicked!')}
        />
      </div>
      <div>
        <h1>Thumbnav Component</h1>
        <Thumbnav items={thumbnavData} />
      </div>
      <div>
        <h1>Tabs Component</h1>
        <Tabs tabs={tabsData} />
      </div>
      <div>
        <h1>Table Component</h1>
        <Table headers={headers2} data={data3} />
      </div>
      <div>
        <h1>Switches Component</h1>
        <Switches options={['Option 1', 'Option 2', 'Option 3']} onChange={handleSwitchChange2} />
      </div>
      <div>
        <h1>Switcher Component</h1>
        <Switcher onChange={handleSwitchChange} />
      </div>
      <div>
        <h1>SVG Example</h1>
        <SVG path={svgPath} width="40px" height="40px" fill="#3f51b5" />
      </div>
      <div>
        <h1>Your Main Content Here</h1>
        <Subnav items={subnavItems} />
      </div>
      <div>
        <h1>Loading...</h1>
        <Spinner />
      </div>
      <div>
        <h1>Sortable List</h1>
        <Sortable items={itemsw} />
      </div>
      <div>
        <Snackbars />
      </div>
      <div>
        <button onClick={() => setShowSnackbar(true)}>Show Snackbar</button>
        {showSnackbar && <Snackbar message="Operation successful!" onClose={() => setShowSnackbar(false)} />}
      </div>
      <br ></br>
      <div className="color-picker">
        <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: '100px', height: '100px' }}></div>
        <Slider value={red} onChange={setRed} max={255} />
        <Slider value={green} onChange={setGreen} max={255} />
        <Slider value={blue} onChange={setBlue} max={255} />
      </div>
    <div>
      <Slideshow
        images={[
          'https://placeholder.co/300',
          'https://placeholder.co/600',
          'https://placeholder.co/900',
        ]}
      />
    </div>
      <br ></br>
      <div className="volume-control">
        <Slider value={volume} onChange={setVolume} />
      </div>
      <br ></br>
      <div>
        <Section>
          <h1>Welcome to the Section</h1>
          <p>This is a simple section component.</p>
        </Section>
        <br ></br>
        <SegmentedButton
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
        />
        <br ></br>
        <SlideNav items={['Home', 'About', 'Contact']} />
      </div>
      <div>
        <h1>Progress Example</h1>
        
        <Progress value={currentStep} max={totalSteps} />
        <br ></br>
        <ProgressIndicator step={currentStep} totalSteps={totalSteps} />
        <br ></br>
        <button onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}>
          Prev Step
        </button>
        <button onClick={() => setCurrentStep(prev => Math.min(prev + 1, totalSteps))}>
          Next Step
        </button>
        
      </div>
      {/* <ProgressIndicator /> */}
      {/* Parallax Example */}
      {/* Display a parallax component with an image */}
      <Parallax image="https://placeholder.co/600" />
      {/* Pagination Example */}
      {/* Display a pagination component with 5 pages */}
      <Pagination currentPage={1} totalPages={5} onPageChange={(page) => console.log(`Changed to page ${page}`)} />
      {/* Padding Example */}
      {/* Display a div with padding */}
      <Padding size="medium">
        <p>This text is inside a medium-padded div.</p>
      </Padding>
      {/* Notification Example */}
      {/* Display a notification that can be closed */}
      <button onClick={handleShowNotification}>Show Notification</button>
      {showNotification && (
        <Notification
          message="This is a notification."
          icon="🔔"
          onClose={handleCloseNotification}
          timeout={5000}
        />
      )}
      {/* NavigationBar Example */}
      {/* Display a navigation bar with a brand name and menu items */}
      <NavigationBar items={navItems2} />
      {/* Navbar Example */}
      {/* Display a navbar with a brand name and menu items */}
      <Navbar items={navItems2} />
      {/* Navigation Bar */}
      {/* Display a navigation bar with specified items */}
      <Nav items={navItems} />

      {/* Modal Example */}
      {/* Open a modal dialog upon clicking the button */}
      <button onClick={toggleModal}>Open Modal</button>
      <Modal show={showModal} onClose={toggleModal}>
        <h1>Hello, I'm a Modal!</h1>
        <p>This is the modal content.</p>
      </Modal>

      {/* Overlay Example */}
      {/* Toggle an overlay on and off */}
      <button onClick={toggleOverlay}>Toggle Overlay</button>
      <Overlay show={showOverlay} onClick={toggleOverlay} />

      {/* OffCanvas Sidebar */}
      {/* Display a sidebar that can be toggled on and off */}
      <OffCanvas>
        <p>Some sidebar content here.</p>
      </OffCanvas>

      {/* Menus Example */}
      {/* Display a menu with options */}
      <Menus options={['Option 1', 'Option 2', 'Option 3']} />

      {/* List Example */}
      {/* Display a list of items */}
      <List items={['Apple', 'Banana', 'Cherry']} />

      {/* Link Example */}
      {/* Display links, both internal and external */}
      <Link to="/about" label="About Us" />
      <Link to="https://www.example.com" label="Visit Example" external />

      {/* Lightbox Example */}
      {/* Display an image in a lightbox */}
      <Lightbox src="https://placeholder.co/600" alt="Description" />

      {/* Leader Example */}
      {/* Display a leader component with a title and content */}
      <Leader title="Chicken Curry" content="$12.99" />

      {/* Label Example */}
      {/* Display labels with different types */}
      <Label content="Important Note" type="important" />
      <Label content="Highlighted Content" type="highlight" />

      {/* Image Example */}
      {/* Display an image with rounded corners */}
      <Image src="https://placeholder.co/300" alt="Description" rounded />

      {/* Grid Example */}
      {/* Display a grid layout with 3 columns */}
      <Grid columns={3}>
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </Grid>

      {/* Heading Example */}
      {/* Display headings of different levels */}
      <Heading level={1} text="This is an H1 Heading" />
      <Heading level={2} text="This is an H2 Heading" />
      <Heading level={3} text="This is an H3 Heading" />

      {/* Form Example */}
      {/* Display a form that triggers an alert on submit */}
      <h1>Form Example</h1>
      <Form onSubmit={handleSubmit} />

      {/* Floating Action Button Example */}
      {/* Display a floating action button that triggers an alert on click */}
      <h1>Floating Action Button Example</h1>
      <FloatingActionButtons onClick={handleClick2} />

      {/* Filter Component Example */}
      {/* Display a filter component that filters a list based on input */}
      <h1>Filter Component Example</h1>
      <Filter data={data} onFilter={handleFilter} />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* ExtendedFAB Component Example */}
      {/* Display an extended floating action button with a label and an icon */}
      <h1>ExtendedFAB Component Example</h1>
      <ExtendedFAB
        label="Add Item"
        icon={<i className="material-icons">add</i>}
        onClick={handleClick}
      />

      {/* Drop Example */}
      {/* Display a drop component that shows content on hover */}
      <h1>Drop</h1>
      <Drop trigger={triggerElement} content={dropContent} />

      {/* Dropbar Component Example */}
      {/* Display a dropbar component that shows content on hover */}
      <h1>Dropbar Component Example</h1>
      <Dropbar triggerElement={triggerElement} dropbarContent={dropbarContent} />

      {/* Dropdown Example */}
      {/* Display a dropdown with options */}
      <h1>Dropdown</h1>
      <Dropdown options={dropdownOptions} onSelect={(option) => alert(option)} />

      {/* Dropnav Component Example */}
      {/* Display a dropnav component with menu items */}
      <h1>Dropnav Component Example</h1>
      <Dropnav menuItems={menuItems} />

      {/* Dialog Example */}
      {/* Display a dialog that can be opened and closed */}
      <h1>Dialog</h1>
      <button onClick={() => setDialogOpen(true)}>Open Dialog</button>
      <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <p>This is a dialog.</p>
      </Dialog>

      {/* Divider Example */}
      {/* Display a divider to separate content */}
      <h1>Divider</h1>
      <Divider />

      {/* Dotnav Example */}
      {/* Display a dot navigation component */}
      <h1>Dotnav</h1>
      <Dotnav count={5} activeIndex={activeIndex} onSelect={setActiveIndex} />

      {/* DatePicker Example */}
      {/* Display a date picker */}
      <h1>Date Picker</h1>
      <DatePicker onDateChange={handleDateChange} />

      {/* Description List Example */}
      {/* Display a description list */}
      <h1>Description List</h1>
      <DescriptionList data={descriptionData} />

      {/* DataTable Example */}
      {/* Display a data table */}
      <h1>Data Table</h1>
      <DataTable headers={headers} data={data} />

      {/* Cover Example */}
      {/* Display a cover component with an image and content */}
      <Cover mediaType="image" mediaSrc="https://placeholder.co/300">
        <h1>Your Content Here</h1>
      </Cover>

      {/* Card Example */}
      {/* Display a card with a title, content, and image */}
      <Card
        title="Card Title"
        content="This is the content of the card."
        imageSrc="https://placeholder.co/300"
      />

      {/* Container Example */}
      {/* Display a container with a max width */}
      <Container maxWidth="800px">
        <h1>Hello, World!</h1>
        <p>This is a container.</p>
      </Container>

      {/* Countdown Example */}
      {/* Display a countdown timer */}
      <h1>Countdown to New Year</h1>
      <Countdown targetDate={targetDate} />

      {/* Comment Example */}
      {/* Display a comment with an author, content, and timestamp */}
      <Comment 
        author="John Doe" 
        content="This is a sample comment." 
        timestamp="2023-09-14 12:34" 
      />

      {/* ColumnLayout Example */}
      {/* Display a column layout with items */}
      <ColumnLayout spacing="normal">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ColumnLayout>

      {/* Breadcrumb Example */}
      {/* Display a breadcrumb navigation */}
      <h1>Breadcrumb</h1>
      <Breadcrumb items={breadcrumbItems} />

      {/* Chips Example */}
      {/* Display chips that can be deleted */}
      <h1>Chips</h1>
      <Chips items={chips} onDelete={handleDelete} />

      {/* BottomSheet Example */}
      {/* Display a bottom sheet that can be opened and closed */}
      <Button onClick={() => setSheetOpen(true)} label="Open Bottom Sheet" />
      <BottomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)}>
        <p>This is a bottom sheet.</p>
      </BottomSheet>

      {/* Background Example */}
      {/* Display a background with a gradient */}
      <Background type="gradient">
        <h1>My App</h1>
        <AppBars title="My App" actions={actions} />
      </Background>

      {/* Article Example */}
      {/* Display an article with a title, content, and author */}
      <Article 
        title="Sample Article" 
        content="This is the content of the sample article." 
        author="John Doe" 
      />

      {/* Accordion Example */}
      {/* Display accordions that can be expanded and collapsed */}
      <Accordion title="Accordion 1">
        <p>This is the content for accordion 1.</p>
      </Accordion>
      <Accordion title="Accordion 2">
        <p>This is the content for accordion 2.</p>
      </Accordion>

      {/* Alert Example */}
      {/* Display alerts of different types */}
      <Alert type="info" message="This is an info alert." />
      <Alert type="success" message="This is a success alert." />
      <Alert type="warning" message="This is a warning alert." />
      <Alert type="error" message="This is an error alert." />

      {/* Align Example */}
      {/* Display aligned content */}
      <Align direction="left">
        <div>Left Aligned</div>
      </Align>
      <Align direction="center">
        <div>Center Aligned</div>
      </Align>
      <Align direction="right">
        <div>Right Aligned</div>
      </Align>

      {/* Animation Example */}
      {/* Display animated content */}
      <Animation type="fadeIn" duration={2}>
        <div>Fade In</div>
      </Animation>
      <Animation type="slideIn" duration={1}>
        <div>Slide In</div>
      </Animation>
      <Animation type="bounce" duration={1.5}>
        <div>Bounce</div>
      </Animation>

      {/* Badge Example */}
      {/* Display a badge with a count over a button */}
      <Badge count={5}>
        <Button label="Click Me!" />
      </Badge>

      {/* BottomAppBar Example */}
      {/* Display a bottom app bar with items */}
      {/* <BottomAppBar items={items} /> */}
    </div>   
  );
};

export default HomePage;
