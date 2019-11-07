import React, { FC } from 'react';

interface ExampleComponentProps {
  name?: string;
}

export const ExampleComponent: FC<ExampleComponentProps> = ({
  name = 'Unknown User',
}) => <div className={'example-component'}>Hello {name} ✋</div>;
