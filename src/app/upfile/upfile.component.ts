import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';
import {Result} from '../today-history/today-history.component';

@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrls: ['./upfile.component.css']
})
export class UpfileComponent implements OnInit {

  constructor(private msg: NzMessageService, private http: HttpClient) {}

  // 图片识别结果是否显示，false为显示 true为不显示
  private textShow = true;

  fileList = [
    // {
    //   uid: -1,
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    // }
  ];
  previewImage = '';
  previewVisible = false;

  private OcrTextAlert = '请先上传要识别的图片！';

  private OcrText = '';

  // 图片上传过程中执行 在开始、上传进度、完成、失败都会调用这个函数。
  handleChange(info: any): void {
    this.previewImage = info.file.thumbUrl;
    if (info.file.message === 'OK') {
      this.http.get('/yy/OcrUpload/' + info.file.name).subscribe(res => {
        // @ts-ignore
        this.OcrText = res;
      });
      this.textShow = false;
    }
  }

  // 预览事件
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
    this.textShow = false;
  }

  ngOnInit() {
  }

}
