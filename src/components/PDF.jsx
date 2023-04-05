import React, { useState } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const MyContent = () => (
  <View>
    <Text>Hello World!</Text>
  </View>
);

const MyPDF = () => (
  <Document>
    <Page>
      <View style={styles.section}>
        <MyContent />
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDF = () => {
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  const handleDownloadClick = () => {
    setShowDownloadLink(true);
  };

  return (
    <div>
      <h1>My PDF Example</h1>
      <button onClick={handleDownloadClick}>Download PDF</button>
      {showDownloadLink && (
        <PDFDownloadLink document={<MyPDF />} fileName="my-pdf.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default PDF;
