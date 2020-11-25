import React from 'react';
import { Accordion } from '../components';
import { OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            {
              <Accordion.Header>
                {(toggleShow) => (
                  <>
                    {item.header}
                    {toggleShow ? (
                      <img src="/images/icons/close-slim.png" alt="Close" />
                    ) : (
                      <img src="/images/icons/add.png" alt="Open" />
                    )}
                  </>
                )}
              </Accordion.Header>
            }
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>
          Try it now <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
