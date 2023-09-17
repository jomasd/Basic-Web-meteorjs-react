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
  return (
    <div>
      <h1>Welcome to My Artist Website</h1>
      <p>This is a brief introduction to who I am and what I do.</p>
     
      <div>
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
