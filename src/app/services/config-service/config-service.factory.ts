import { ConfigService } from './config.service';

export function configServiceFactory(
  config: ConfigService,
  configUrl: string,
) {
  console.log('~~~> configServiceFactory called with configUrl:', configUrl);
  return function() {
    return config.load(configUrl);
  };
}
