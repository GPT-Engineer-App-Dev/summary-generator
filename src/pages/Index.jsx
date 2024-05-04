import React, { useState } from "react";
import { Container, VStack, Textarea, Button, Text, Box } from "@chakra-ui/react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [summaryText, setSummaryText] = useState("");

  // Placeholder for summarization function
  const summarizeText = (text) => {
    // This is a mock function to simulate text summarization
    // In a real application, you would call an API like OpenAI's GPT-3.5 here
    return text.substring(0, 100) + "..."; // Simplified summary by truncating
  };

  const handleSummarize = () => {
    const summary = summarizeText(inputText);
    setSummaryText(summary);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Text Summarizer</Text>
        <Textarea placeholder="Enter your text here..." value={inputText} onChange={(e) => setInputText(e.target.value)} size="sm" />
        <Button colorScheme="blue" onClick={handleSummarize}>
          Summarize
        </Button>
        <Box w="100%">
          <Text mb={2}>Summary:</Text>
          <Textarea value={summaryText} isReadOnly placeholder="Summary will appear here..." size="sm" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
