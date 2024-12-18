import { useNavigate } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';
import { useTpsToast } from '@ui/components/toast/useTpsToast.tsx';
import { useElementWidth } from '@hooks/useElementWidth.ts';
import { useBreadCrumb } from '@hooks/useBreadCrumb.ts';
import { useMemo } from 'react';

export const TpsError = ({ error }: FallbackProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToast } = useTpsToast();

  const btnList = useMemo(() => [], []);

  useBreadCrumb(btnList);

  const btnHandler = () => {
    navigate(-1);
  };

  const errorMessage = error?.message || '';

  const displayMessage = errorMessage.includes(
    "Cannot read properties of null (reading 'row')",
  )
    ? t('error.invalid_access')
    : t('error.cannot_load_data');

  const { elementWidth: contentsWidth } = useElementWidth('.contents');
  const { elementWidth: lnbWidth } = useElementWidth('.lnbAccordion');

  if (error?.message === 'Network Error') {
    addToast({
      id: 555, // This ID should be unique if not updating
      type: 'alert',
      status: 'error',
      title: `${t('error.network_error')}`,
      containerStyle: {
        maxWidth: `${contentsWidth}px`,
        paddingLeft: `${lnbWidth * 0.5}px`,
        margin: 0,
        marginBottom: '10px',
      },
    });
  }

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="100%"
    >
      {displayMessage}
      <Button onClick={btnHandler}>{t('button.go_back')}</Button>
    </Flex>
  );
};

export const MenuError = ({ error }: FallbackProps) => {
  const { t } = useTranslation();
  const { addToast } = useTpsToast();

  const { elementWidth: contentsWidth } = useElementWidth('.contents');
  const { elementWidth: lnbWidth } = useElementWidth('.lnbAccordion');

  if (error?.message === 'Network Error') {
    addToast({
      id: 555, // This ID should be unique if not updating
      type: 'alert',
      status: 'error',
      title: `${t('error.network_error')}`,
      containerStyle: {
        maxWidth: `${contentsWidth}px`,
        paddingLeft: `${lnbWidth * 0.5}px`,
        margin: 0,
        marginBottom: '10px',
      },
    });
  }

  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      {t('menu.error')}
    </Flex>
  );
};
