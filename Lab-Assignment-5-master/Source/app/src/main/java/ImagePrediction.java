package com.clarifai.android.starter.api.v2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.clarifai.android.starter.api.v2.activity.RecognizeConceptsActivity;

public class ImagePrediction extends AppCompatActivity {

    Button b1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_image_prediction);

        b1=(Button) findViewById(R.id.button);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ImagePrediction.this, RecognizeConceptsActivity.class);
                startActivity(i);
            }
        });


    }
}
